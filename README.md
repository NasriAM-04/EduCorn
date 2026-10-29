# EduCorn — School Management System

**[Live Website — Try EduCorn](https://nasriam-04.github.io/EduCorn/)**

**[GitHub Repository — View Source Code](https://github.com/NasriAM-04/EduCorn)**

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
- Personalized login experience using first and last names.
- Real-time validation for both First Name and Last Name.
- Rejects numbers and unsupported special characters with descriptive error messages.
- Administrator name and initials displayed throughout the dashboard.
- Browser-based session management.
- Logout functionality with a confirmation dialog.

**Note:** The current login is intended for portfolio demonstration purposes and does not provide production-level authentication.

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
- Fully functional Administrator profile management.
- Displays the Administrator's full name, avatar initials, role, and account type.
- Allows the Administrator to update their first and last names.
- Real-time name validation that rejects numbers and unsupported special characters.
- Displays descriptive validation errors identifying the type of invalid input.
- Confirmation dialog displays the previous and proposed Administrator names before saving.
- Selecting **No** cancels the change without modifying the saved name.
- Selecting **Yes, Save Changes** updates the Administrator's name and avatar initials.
- Automatically returns to Dashboard after a successful name change.
- Preserves the updated Administrator information throughout the current browser session.

### Administrator Preferences — Under Development
- Dedicated Preferences page with completed interface styling and working navigation.
- **Appearance:** Light Mode, Dark Mode, and Compact Layout options.
- **Dashboard Preferences:** Default Landing Page selection.
- **Accessibility:** Text Size and Reduced Motion options.
- Includes Save Preferences and Restore Defaults buttons.
- Navigation between Preferences, My Profile, and the management sections displays the appropriate page headers.

**Current Status:** The Preferences interface is implemented, and its controls are visible and selectable. However, theme switching, compact layout, landing-page selection, accessibility adjustments, saving preferences, and restoring defaults are not functional yet.

The Preferences dropdown option is also planned to be hidden while the Preferences page is active.

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
├── .github/
│   └── workflows/
│       └── static.yml
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

EduCorn is an ongoing project. The following checklist tracks completed milestones and planned improvements.

### Completed Milestones

- [x] Create the initial school management dashboard.
- [x] Implement demo Administrator login and logout.
- [x] Implement Faculty management with CRUD operations.
- [x] Implement Student management with CRUD operations.
- [x] Create original EduCorn branding, including mascot, logo, and visual identity.
- [x] Publish the project source code on GitHub.
- [x] Deploy the interactive frontend through GitHub Pages.
- [x] Implement Administrator My Profile navigation and interface.
- [x] Implement Administrator name editing and session updates.
- [x] Add confirmation before saving Administrator profile changes.
- [x] Add real-time name validation to My Profile.
- [x] Add real-time name validation to the demo login screen.
- [x] Implement the Preferences page interface and navigation.
- [x] Correct dashboard headers when navigating between Administrator and management sections.

### In Progress and Planned

- [ ] Implement Light/Dark Theme switching.
- [ ] Implement Compact Layout.
- [ ] Implement Default Landing Page preferences.
- [ ] Implement Text Size and Reduced Motion settings.
- [ ] Implement Save Preferences and Restore Defaults.
- [ ] Hide Preferences from its dropdown while viewing Preferences.
- [ ] Develop the About EduCorn page.
- [ ] Improve existing Faculty and Student management.
- [ ] Complete Course management.
- [ ] Complete Section management.
- [ ] Complete Enrollment management.
- [ ] Rebuild and integrate the Java/SQLite database backend with the frontend.
- [ ] Implement Demo Data management after the school management modules are functional.
- [ ] Expand application testing, reliability, and security.

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

The current frontend includes an interactive school management dashboard, functional Faculty and Student management, a demo Administrator login, logout confirmation, and completed Administrator profile editing.

Name validation is implemented in both the login and Administrator profile forms. Invalid entries containing numbers or unsupported special characters are rejected with descriptive error messages.

The Administrator Preferences interface is also available, with working navigation and selectable settings. However, its appearance, dashboard customization, accessibility, and preference-saving functionality remain under development.

Courses, Sections, Enrollments, and About EduCorn are planned for further implementation.

The existing Java/SQLite database application remains separate from the web frontend. Integrating these components is a future development milestone.

**EduCorn's live website is publicly accessible through GitHub Pages**, allowing visitors to explore the current frontend while development continues.

The repository, documentation, and live website will continue to evolve as features are implemented, tested, and refined.

## Author

**Mouath Nasri**

Developer and Creator of EduCorn

[GitHub Profile](https://github.com/NasriAM-04)