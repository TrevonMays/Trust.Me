from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import (
    LoginManager,
    UserMixin,
    login_user,
    logout_user,
    login_required
)
from datetime import datetime


app = Flask(__name__)

app.config["SECRET_KEY"] = "dev-secret-key"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///patients.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String(100), unique=True, nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    password = db.Column(db.String(255), nullable=False)


class Patients(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)

    date_of_birth = db.Column(db.String(100))
    gender = db.Column(db.String(50))
    phone = db.Column(db.String(50))
    email_address = db.Column(db.String(300))

    allergies = db.Column(db.Text)
    medications = db.Column(db.Text)
    medical_history = db.Column(db.Text)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        hashed_password = bcrypt.generate_password_hash(
            request.form.get("password")
        ).decode("utf-8")

        new_user = User(
            username=request.form.get("username"),
            email=request.form.get("email"),
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for("login"))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = User.query.filter_by(
            email=request.form.get("email")
        ).first()

        if user and bcrypt.check_password_hash(
            user.password,
            request.form.get("password")
        ):
            login_user(user)
            return redirect(url_for("index"))

    return render_template("login.html")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))


@app.route("/")
@login_required
def index():
    patients = Patients.query.all()
    return render_template("index.html", patients=patients)


@app.route("/patients/add", methods=["GET", "POST"])
@login_required
def add_patients():
    if request.method == "POST":
        new_patient = Patients(
            first_name=request.form.get("first_name"),
            last_name=request.form.get("last_name"),
            date_of_birth=request.form.get("date_of_birth"),
            gender=request.form.get("gender"),
            phone=request.form.get("phone"),
            email_address=request.form.get("email_address"),
            allergies=request.form.get("allergies"),
            medications=request.form.get("medications"),
            medical_history=request.form.get("medical_history")
        )

        db.session.add(new_patient)
        db.session.commit()

        return redirect(url_for("index"))

    return render_template("add_patient.html")


@app.route("/patients/<int:patients_id>")
@login_required
def patient_detail(patients_id):
    patient = Patients.query.get_or_404(patients_id)
    return render_template("patient_detail.html", patient=patient)


@app.route("/patients/<int:patients_id>/edit", methods=["GET", "POST"])
@login_required
def edit_patients(patients_id):
    patient = Patients.query.get_or_404(patients_id)

    if request.method == "POST":
        patient.first_name = request.form.get("first_name")
        patient.last_name = request.form.get("last_name")
        patient.date_of_birth = request.form.get("date_of_birth")
        patient.gender = request.form.get("gender")
        patient.phone = request.form.get("phone")
        patient.email_address = request.form.get("email_address")
        patient.allergies = request.form.get("allergies")
        patient.medications = request.form.get("medications")
        patient.medical_history = request.form.get("medical_history")

        db.session.commit()

        return redirect(url_for("index"))

    return render_template("edit_patient.html", patient=patient)


@app.route("/patients/<int:patients_id>/delete", methods=["POST"])
@login_required
def delete_patient(patients_id):
    patient = Patients.query.get_or_404(patients_id)

    db.session.delete(patient)
    db.session.commit()

    return redirect(url_for("index"))


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)