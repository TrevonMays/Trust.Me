# Flask EMR System

A full-stack Electronic Medical Record (EMR) web application built with Python, Flask, SQLAlchemy, and SQLite. This project allows users to securely manage patient records, medical histories, appointments, and healthcare-related workflows through a web-based interface.

---

## Features

* User registration and authentication
* Secure password hashing with Flask-Bcrypt
* Login session management with Flask-Login
* Add, edit, and delete patient records
* View detailed patient medical information
* Store allergies, medications, and medical history
* SQLite database integration using SQLAlchemy ORM
* Responsive HTML templates with CSS styling

---

## Tech Stack

### Backend

* Python
* Flask
* SQLAlchemy
* Flask-Login
* Flask-Bcrypt

### Frontend

* HTML5
* CSS3
* Jinja2 Templates

### Database

* SQLite

### Tools

* Git
* GitHub

---

## Project Structure

```bash
flask_emr/
│
├── app.py
├── models.py
├── instance/
│   └── patients.db
├── static/
│   └── main.css
├── templates/
│   ├── base.html
│   ├── login.html
│   ├── register.html
│   ├── patients.html
│   ├── add_patient.html
│   ├── edit_patient.html
│   └── patient_detail.html
└── requirements.txt
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/TrevonMays/flask_emr.git
cd flask_emr
```

Create a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open in browser:

```bash
http://127.0.0.1:5000/
```

---

## Future Improvements

* Role-based authentication (Admin / Provider / Patient)
* Appointment scheduling system
* REST API integration
* PostgreSQL support
* Docker containerization
* AWS deployment
* Search and filtering functionality
* Patient document uploads
* Email notifications

---

## Screenshots



---

## Author

Trevon Mays

* GitHub: https://github.com/TrevonMays
* LinkedIn: https://www.linkedin.com/in/trevon-mays/
