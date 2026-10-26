# EduCorn — School Management System

**A school management application designed to make managing academic records more organized, accessible, and efficient.**

**Project Status:** Under Active Development

## Project Overview

EduCorn is a software engineering project focused on developing a school management system with an interactive web dashboard and a database-driven foundation.

The project brings together frontend development, database management, and application design to create a centralized environment for managing school information.

EduCorn also features original branding, including a custom-designed mascot, logo, and visual identity.

## Features

### Interactive Dashboard
- Custom-designed school management interface
- Sidebar navigation for different management sections
- Responsive user interface elements
- Original EduCorn branding and visual assets

### Demo Administrator Login
- Personalized login experience using first and last names
- Administrator name and initials displayed in the dashboard
- Browser session management
- Logout functionality with a confirmation dialog

**Note:** The current login is intended for demonstration purposes and does not provide production-level authentication.

### Faculty Management
- Add new faculty records
- View existing faculty records
- Edit faculty information
- Delete faculty records
- Organize faculty information by department, subject, and role

### Student Management
- Add new student records
- View existing student records
- Edit student information
- Delete student records
- Generate student identifiers and school email addresses
- Organize students by academic major

### Administrator Profile
- Dedicated profile interface
- Display administrator information
- Editable profile fields in development

### Additional Management Sections
The interface includes sections for:
- Courses
- Sections
- Enrollments

These features are being developed as the project progresses.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | Interface styling and layout |
| JavaScript | Dashboard interactivity and browser-based data management |
| Java | Database application foundation |
| SQLite | Relational database |
| JDBC | Java database connectivity |
| Git | Version control |
| GitHub | Source code hosting and project tracking |

## Current Architecture

EduCorn currently contains two development components.

**Web Frontend**

The interactive dashboard is built with HTML, CSS, and JavaScript. Faculty and student records are currently managed using browser local storage.

**Java Database Foundation**

The project also contains a Java application using SQLite and JDBC for academic record management, including faculty, courses, sections, and enrollments.

These components are not yet connected. Integrating the frontend with a database-backed application is part of the project's planned development.

## Project Structure

```text
EduCorn/
├── frontend/
│   ├── images/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── EduCornDatabase.java
├── .gitignore
└── README.md
```

## Running the Current Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/NasriAM-04/EduCorn.git
   ```

2. Open the project folder.

3. Open `frontend/index.html` in a web browser.

4. Enter a first and last name on the demo login screen to access the dashboard.

5. Explore the available management features.

**Important:** This is currently a frontend demonstration. Data stored through the web dashboard is saved locally in the browser, not in a shared school database. It should not be used for real student or faculty records.

## Development Roadmap

EduCorn is an ongoing project. Planned work includes:

- [x] Create the initial dashboard interface
- [x] Implement demo Administrator login and logout
- [x] Implement Faculty management
- [x] Implement Student management
- [x] Add original EduCorn branding
- [x] Publish the source code on GitHub
- [ ] Complete Administrator profile editing
- [ ] Develop Course management
- [ ] Develop Section management
- [ ] Develop Enrollment management
- [ ] Integrate the frontend with a database-backed application
- [ ] Expand testing and improve application reliability
- [ ] Deploy an interactive web demonstration

## Project Goals

EduCorn is a personal portfolio project designed to demonstrate practical skills across multiple areas of computing, software development, information technology, and data management.

The project incorporates concepts and technologies relevant to several professional disciplines, including:

- **Software Development:** Application logic, programming, CRUD operations, and software architecture.
- **Frontend Development:** HTML, CSS, JavaScript, interactive interfaces, and responsive design.
- **Backend Development:** Java programming, database connectivity, and planned frontend-backend integration.
- **Web Development:** Building and maintaining a browser-based management application.
- **Database Management:** SQL, relational database design, and structured data operations.
- **Data Analytics:** Organizing and managing structured academic data as a foundation for future reporting and analysis.
- **UI/UX Design:** Creating intuitive navigation, consistent layouts, and an original visual identity.
- **IT and Information Systems:** Developing tools to organize and manage institutional information.
- **Security Fundamentals:** Exploring data handling, access control, and secure application design as the system develops.

The goal is to continue expanding EduCorn into a more complete school management application while demonstrating technical versatility, problem-solving, and continuous improvement across different areas of computing.

## Development Status

**EduCorn is actively under development.**

The project currently includes functional frontend features and an existing Java/SQLite database application. Additional functionality, system integration, security improvements, and database-backed web operations remain part of ongoing development.

This repository will continue to evolve as new features are implemented, tested, and refined.

## Author

**Mouath Nasri**

Developer and Creator of EduCorn

[GitHub Profile](https://github.com/NasriAM-04)