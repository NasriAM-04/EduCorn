/* =========================================
   EduCorn - School Management Dashboard
   JavaScript Functionality
========================================= */

"use strict";

// =========================================
// EduCorn Demo Login Session
// =========================================

const SESSION_KEY = "educorn_demo_session";

const loginPage = document.getElementById("login-page");
const loginForm = document.getElementById("login-form");
const dashboardSidebar = document.querySelector(".sidebar");
const dashboardContent = document.querySelector(".main-content");

function showLoginPage() {
    loginPage.hidden = false;
    dashboardSidebar.style.display = "none";
    dashboardContent.style.display = "none";
}

function showManagementDashboard(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    const initials = (
        firstName.charAt(0) + lastName.charAt(0)
    ).toUpperCase();

    const profileName = document.querySelector(
        ".profile-toggle span:first-child"
    );

    const profileAvatar = document.querySelector(
        ".profile-toggle .avatar"
    );

    profileName.textContent = fullName;
    profileAvatar.textContent = initials;

    loginPage.hidden = true;
    dashboardSidebar.style.display = "";
    dashboardContent.style.display = "";
}

const savedSession = sessionStorage.getItem(SESSION_KEY);

if (savedSession) {
    try {
        const session = JSON.parse(savedSession);

        if (
            typeof session.firstName === "string" &&
            session.firstName.trim() &&
            typeof session.lastName === "string" &&
            session.lastName.trim()
        ) {
            showManagementDashboard(
                session.firstName,
                session.lastName
            );
        } else {
            sessionStorage.removeItem(SESSION_KEY);
            showLoginPage();
        }
    } catch (error) {
        sessionStorage.removeItem(SESSION_KEY);
        showLoginPage();
    }
} else {
    showLoginPage();
}

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const firstName = document.getElementById(
        "login-first-name"
    ).value.trim();

    const lastName = document.getElementById(
        "login-last-name"
    ).value.trim();

    if (!firstName || !lastName) {
        return;
    }

    sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ firstName, lastName })
    );

    showManagementDashboard(firstName, lastName);
});

// =========================================
// 1. Application Data
// =========================================

const STORAGE_KEY = "educorn_school_data";

const emptyData = () => ({
    faculty: [],
    students: [],
    courses: [],
    sections: [],
    enrollments: [],
});

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return emptyData();
        }

        const parsed = JSON.parse(saved);
        const data = emptyData();

        for (const entity of Object.keys(data)) {
            if (Array.isArray(parsed?.[entity])) {
                data[entity] = parsed[entity];
            }
        }

        return data;
    } catch (error) {
        console.error("Unable to load saved records:", error);
        return emptyData();
    }
}

let schoolData = loadData();

function saveData() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(schoolData)
        );
        return true;
    } catch (error) {
        console.error("Unable to save records:", error);
        alert("Unable to save records in this browser.");
        return false;
    }
}

// =========================================
// 2. Entity Configuration
// =========================================

const departmentSubjects = {
    "Mathematics": [
        "Abstract Algebra I",
        "Algebra",
        "Calculus I",
        "Calculus II",
        "Calculus III",
        "Geometry",
        "Intro to Mathematical Proofs",
        "Linear Algebra",
        "Probability & Statistics",
        "Real Analysis I",
        "Trigonometry",
    ],
    "Natural Sciences": [
        "Astronomy",
        "Biology",
        "Biophysics",
        "Chemistry",
        "Earth Science",
        "Environmental Biology",
        "Environmental Science",
        "General Biology",
        "General Physics",
        "Historical Geology",
        "Meterology",
        "Physical Geology",
        "Physics",
    ],
    "Humanities & Language Arts": [
        "Comparative Literature",
        "Composition & Rhetoric",
        "Creative Writing",
        "English Literature",
        "Film & Society",
        "Grammar & Composition",
        "Musicology",
        "National Literature",
        "Philosophy",
        "World Literature",
    ],
    "Computer Science": [
        "Automata Theory",
        "Compiler Design",
        "Computer Networks & Disc Process",
        "Computer Org. & Assembly Language",
        "Cryptography",
        "Cybersecurity",
        "Data Structures & Algorithm Analysis",
        "Database Systems",
        "Java Programming",
        "Mobile App Design",
        "Operating Systems",
        "Software Engineering I",
        "Software Engineering II",
        "Software Engineering Tools",
        "Web Technology",
    ],
    "Social Studies": [
        "Anthropology",
        "Civics",
        "Culture & Global Business",
        "Economics",
        "Ethnics & Cultural Studies",
        "Geography",
        "Macroeconomics",
        "People & Technology",
        "Political Science",
        "Physchology",
        "Sociology",
        "World History",
    ],
    "Health": [
        "Anatomy & Physiology",
        "Epidemiology",
        "Health & Wellness",
        "Health Education",
        "Health Informatics",
        "Nutrition",
        "Pathophysiology",
        "PE",
        "Public Health",
    ]
};

const entityConfig = {
    faculty: {
        label: "Faculty",
        tableId: "faculty-table",
        fields: [
            {
                name: "name",
                label: "Faculty Name",
                type: "text"
            },
            {
                name: "department",
                label: "Department",
                type: "select",
                options: [
                    "Mathematics",
                    "Natural Sciences",
                    "Humanities & Language Arts",
                    "Computer Science",
                    "Social Studies",
                    "Health",
                ]
            },

            {
                name: "subject",
                label: "Subject",
                type: "select",
                dependsOn: "department"
            },

            {
                name: "role",
                label: "Role",
                type: "select",
                options: [
                    "Adjunct Professor",
                    "Associate Professor",
                    "Assistant Professor",
                    "Department Chair",
                    "Instructor",
                    "Lecturer",
                    "Professor",
                    "Program Coordinator",
                ]
            }
        ]
    },

    students: {
        label: "Student",
        tableId: "students-table",
        fields: [
            {
                name: "name",
                label: "Student Name",
                type: "text"
            },
            {
                name: "major",
                label: "Major",
                type: "select",
                options: [
                    "Accounting",
            "Acturial Mathematics",
            "African American Studies",
            "Biochemistry",
            "Bioengineering",
            "Computer & Information Science",
            "Computer Engineering",
            "Criminology",
            "Cybersecurity & Information Assurance",
            "Data Science",
            "Electrical Engineering",
            "Elementary Education",
            "Finance",
            "French Studies",
            "General Business",
            "Health Information Technology",
            "Human-Centered Engineering Design",
            "Industrial & Systems Engineering",
            "Management",
            "Manufacturing Engineering",
            "Marketing",
            "Mechanical Engineering",
            "Microbiology",
            "Public Health Education & Promotion",
            "Robotics Engineering",
            "Secondary Education",
            "Supply Chain Management",
            "Urban & Religion Studies"
                ]
            }
        ]
    },

    courses: {
        label: "Course",
        tableId: "courses-table",
        fields: [
            {
                name: "title",
                label: "Course Title",
                type: "text"
            },
            {
                name: "credits",
                label: "Credits",
                type: "number",
                min: 1,
                max: 6
            }
        ]
    },

    sections: {
        label: "Section",
        tableId: "sections-table",
        fields: [
            {
                name: "course_id",
                label: "Course",
                type: "select",
                source: "courses",
                display: "title"
            },
            {
                name: "semester",
                label: "Semester",
                type: "text",
                placeholder: "e.g. Fall 2026"
            }
        ]
    },

    enrollments: {
        label: "Enrollment",
        tableId: "enrollments-table",
        fields: [
            {
                name: "student_name",
                label: "Student Name",
                type: "text"
            },
            {
                name: "section_id",
                label: "Section",
                type: "select",
                source: "sections",
                display: "semester"
            }
        ]
    }
};

// =========================================
// 3. DOM Elements
// =========================================

const navigationLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll(".page-section");

const modal = document.getElementById("form-modal");
const modalTitle = document.getElementById("modal-title");
const recordForm = document.getElementById("record-form");
const formFields = document.getElementById("form-fields");
const closeModalButton = document.getElementById("close-modal");
const cancelButton = document.getElementById("cancel-btn");

let currentEntity = null;
let editingId = null;
let previousFocus = null;

// =========================================
// 4. Sidebar Navigation
// =========================================

function showSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (!target || !target.classList.contains("page-section")) {
        return;
    }

    pageSections.forEach(section => {
        section.classList.toggle(
            "active",
            section.id === sectionId
        );
    });

    navigationLinks.forEach(link => {
        const active = link.dataset.section === sectionId;

        link.classList.toggle("active", active);

        if (active) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    const profileMenuOption = document.querySelector(
        '[data-profile-action="profile"]'
    );

    profileMenuOption.style.display =
        sectionId === "my-profile" ? "none" : "";
}

navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = link.dataset.section;
        showSection(sectionId);

        history.replaceState(null, "", `#${sectionId}`);
    });
});

document.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const { action, entity, id } = button.dataset;

    if (!entityConfig[entity]) {
        return;
    }

    if (action === "add") {
        openModal(entity);
    }

    if (action === "edit") {
        openModal(entity, entity === "students" ? id : Number(id));
    }

    if (action === "delete" &&
        (entity === "faculty" ||
        entity === "enrollments" ||
        entity === "students")) {
        deleteRecord(entity, entity === "students" ? id : Number(id));
    }
});

//Administration menu
const profileToggle = document.getElementById("profile-toggle");
const profileMenu = document.getElementById("profile-menu");

profileToggle.addEventListener("click", () =>{
    const isOpening = profileMenu.hidden;

    profileMenu.hidden = !isOpening;
    profileToggle.setAttribute("aria-expanded", String(isOpening));
});

document.addEventListener("click", event => {
    if (!event.target.closest(".user-profile")) {
        profileMenu.hidden = true;
        profileToggle.setAttribute("aria-expanded", "false");
    }
});

// =========================================
// Administrator My Profile Navigation
// =========================================

const myProfileButton = document.querySelector(
    '[data-profile-action="profile"]'
);

myProfileButton.addEventListener("click", () => {
    const savedSession = sessionStorage.getItem(SESSION_KEY);

    if (!savedSession) {
        showLoginPage();
        return;
    }

    const session = JSON.parse(savedSession);

    const firstName = session.firstName;
    const lastName = session.lastName;

    const fullName = `${firstName} ${lastName}`;
    const initials = (
        firstName.charAt(0) + lastName.charAt(0)
    ).toUpperCase();

    document.getElementById("profile-page-avatar").textContent = initials;
    document.getElementById("profile-page-name").textContent = fullName;

    document.getElementById("profile-first-name").value = firstName;
    document.getElementById("profile-last-name").value = lastName;

    showSection("my-profile");

    document.getElementById("page-title").textContent = "My Profile";

    document.getElementById("page-description").textContent =
        "View and manage your demo administrator profile.";

    profileMenu.hidden = true;
    profileToggle.setAttribute("aria-expanded", "false");

    // My Profile menu visibility will be managed by page navigation.
});

// =========================================
// Administrator Logout Confirmation
// =========================================

const logoutButton = document.querySelector(
    '[data-profile-action="logout"]'
);

const logoutModal = document.getElementById("logout-modal");
const cancelLogout = document.getElementById("cancel-logout");
const confirmLogout = document.getElementById("confirm-logout");

logoutButton.addEventListener("click", () => {
    profileMenu.hidden = true;
    profileToggle.setAttribute("aria-expanded", "false");

    logoutModal.hidden = false;
    cancelLogout.focus();
});

cancelLogout.addEventListener("click", () => {
    logoutModal.hidden = true;
    profileToggle.focus();
});

confirmLogout.addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);

    logoutModal.hidden = true;
    loginForm.reset();

    showLoginPage();
});

// =========================================
// 5. Dashboard Statistics
// =========================================

function updateDashboard() {
    const counts = {
        "faculty-count": schoolData.faculty.length,
        "course-count": schoolData.courses.length,
        "section-count": schoolData.sections.length,
        "enrollment-count": schoolData.enrollments.length
    };

    for (const [elementId, count] of Object.entries(counts)) {
        const element = document.getElementById(elementId);

        if (element) {
            element.textContent = count;
        }
    }
}

// =========================================
// 6. Table Rendering
// =========================================

function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = String(value ?? "");
    return cell;
}

function createActionButton(label, className, action, entity, id) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;
    button.className = className;

    button.dataset.action = action;
    button.dataset.entity = entity;
    button.dataset.id = String(id);

    return button;
}

function renderTable(entity) {
    const config = entityConfig[entity];
    const tableBody = document.getElementById(config.tableId);

    if (!tableBody) {
        return;
    }

    tableBody.replaceChildren();

    const records = schoolData[entity];

    if (records.length === 0) {
        const row = document.createElement("tr");
        const cell = createCell("No records available.");

        cell.colSpan = config.fields.length + 2;
        cell.className = "empty-state";

        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    for (const record of records) {
        const row = document.createElement("tr");

        row.appendChild(createCell(record.id));

        for (const field of config.fields) {
            row.appendChild(
                createCell(getDisplayValue(field, record[field.name]))
            );
        }

        if (entity === "students") {
            const majorCell = row.lastElementChild;
            const emailCell = createCell(record.email ?? "");

            row.insertBefore(emailCell, majorCell);
        }

        const actionsCell = document.createElement("td");

        actionsCell.appendChild(
            createActionButton(
                "Edit",
                "edit-btn",
                "edit",
                entity,
                record.id
            )
        );

        // Matches the original Java application's delete operation.
        if (entity === "enrollments" || entity === "faculty" || entity === "students") {
            actionsCell.appendChild(
                createActionButton(
                    "Delete",
                    "delete-btn",
                    "delete",
                    entity,
                    record.id
                )
            );
        }

        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    }
}

function getDisplayValue(field, value) {
     // Display ordinary fields and fixed dropdown choices directly
    if (field.type !== "select" || !field.source) {
        return value;
    }

    // Look up records from related tables
    const relatedRecord = schoolData[field.source].find(
        item => item.id === Number(value)
    );

    if (!relatedRecord) {
        return `ID ${value} (not found)`;
    }

    if (field.source === "sections") {
        return `Section ${relatedRecord.id} - ${relatedRecord.semester}`;
    }

    return `${relatedRecord[field.display]} (ID ${relatedRecord.id})`;
}

function renderAll() {
    for (const entity of Object.keys(entityConfig)) {
        renderTable(entity);
    }

    updateDashboard();
}

// =========================================
// 7. Add/Edit Form
// =========================================

function setupFacultySubjectDropdown(entity, record) {
    if (entity !== "faculty") return;

    const departmentInput =
    formFields.querySelector('[name="department"]');

    const subjectInput =
    formFields.querySelector('[name="subject"]');

    if (!departmentInput || !subjectInput) return;

    const subjectGroup = subjectInput.closest(".form-group");

    function updateSubjects(savedSubject = "") {
        const department = departmentInput.value;
        const subjects = departmentSubjects[department] || [];

        subjectInput.replaceChildren();

        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = "Select Subject";
        subjectInput.appendChild(placeholder);

        for (const subject of subjects) {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectInput.appendChild(option);
        }

        subjectGroup.hidden = !department;
        subjectInput.disabled = !department;

        subjectInput.value = subjects.includes(savedSubject)
            ? savedSubject
            : "";
    }

    departmentInput.addEventListener("change", () => {
        updateSubjects();
    });

    updateSubjects(record?.subject || "");
}


function openModal(entity, id = null) {
    if (!entityConfig[entity]) {
        return;
    }

    const config = entityConfig[entity];

    const record = id === null
        ? null
        : schoolData[entity].find(item => item.id === id);

    if (id !== null && !record) {
        alert("Record not found.");
        return;
    }

    currentEntity = entity;
    editingId = record ? record.id : null;
    previousFocus = document.activeElement;

    modalTitle.textContent =
        `${record ? "Edit" : "Add"} ${config.label}`;

    formFields.replaceChildren();

    for (const field of config.fields) {

        // Faculty First Name and Last Name
        if ((entity === "faculty" || entity === "students") && field.name === "name") {
            const group = document.createElement("div");
            group.className = "form-group";

            const heading = document.createElement("div");
            heading.textContent = entity === "students" ? "Student Name" : "Faculty Name";
            heading.className = "faculty-name-heading";

            const nameRow = document.createElement("div");
            nameRow.className = "faculty-name-row";

            const nameParts = (record?.name || "").trim().split(/\s+/);
            const firstName = nameParts.shift() || "";
            const lastName = nameParts.join(" ");

            for (const [fieldName, fieldLabel, value] of [
                ["first_name", "First Name", firstName],
                ["last_name", "Last Name", lastName]
            ]) {
                const fieldGroup = document.createElement("div");

                const label = document.createElement("label");
                label.textContent = fieldLabel;
                label.htmlFor = `field-${fieldName}`;

                const input = document.createElement("input");
                input.type = "text";
                input.id = `field-${fieldName}`;
                input.name = fieldName;
                input.placeholder = fieldLabel;
                input.value = value;
                input.required = true;

                fieldGroup.appendChild(label);
                fieldGroup.appendChild(input);
                nameRow.appendChild(fieldGroup);
            }

            group.appendChild(heading);
            group.appendChild(nameRow);
            formFields.appendChild(group);

            continue;
        }

        // Regular form fields
        const group = document.createElement("div");
        group.className = "form-group";

        const label = document.createElement("label");
        label.textContent = field.label;
        label.htmlFor = `field-${field.name}`;

        let input;

        if (field.type === "select") {
            input = document.createElement("select");

            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = `Select ${field.label}`;
            input.appendChild(placeholder);

            if (field.options) {
                for (const value of field.options) {
                    const option = document.createElement("option");
                    option.value = value;
                    option.textContent = value;
                    input.appendChild(option);
                }
            } else if (field.source) {
                for (const item of schoolData[field.source]) {
                    const option = document.createElement("option");
                    option.value = item.id;

                    option.textContent =
                        field.source === "sections"
                            ? `Section ${item.id} - ${item.semester}`
                            : `${item[field.display]} (ID ${item.id})`;

                    input.appendChild(option);
                }
            }
        } else {
            input = document.createElement("input");
            input.type = field.type;

            if (field.type === "number") {
                input.step = "1";

                if (field.min !== undefined) {
                    input.min = field.min;
                }

                if (field.max !== undefined) {
                    input.max = field.max;
                }
            }
        }

        input.id = `field-${field.name}`;
        input.name = field.name;
        input.required = true;

        if (field.placeholder) {
            input.placeholder = field.placeholder;
        }

        if (record) {
            input.value = record[field.name] ?? "";
        }

        group.appendChild(label);
        group.appendChild(input);
        formFields.appendChild(group);
    }

    // Preserve the Department to Subject functionality
    setupFacultySubjectDropdown(entity, record);

    modal.hidden = false;

    const firstInput = formFields.querySelector("input, select");

    if (firstInput) {
        firstInput.focus();
    }
}

function closeModal() {
    modal.hidden = true;
    recordForm.reset();

    currentEntity = null;
    editingId = null;

    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }
}

// =========================================
// 8. Save Records
// =========================================

function getNextId(records) {
    return records.reduce(
        (highest, record) => Math.max(highest, record.id),
        0
    ) + 1;
}


function generateStudentId() {
    let studentId;

    do {
        const randomNumber = Math.floor(
            1000000 + Math.random() * 9000000
        );

        studentId = `EC#${randomNumber}`;
    } while (
        schoolData.students.some(student => student.id === studentId)
    );

    return studentId;
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!currentEntity) {
        return;
    }

    const config = entityConfig[currentEntity];
    const recordData = {} ;

    for (const field of config.fields) {

        // Combine Faculty First Name and Last Name
        if ((currentEntity === "faculty" || currentEntity === "students") && field.name === "name") {
            const firstInput = recordForm.elements.namedItem("first_name");
            const lastInput = recordForm.elements.namedItem("last_name");

            if (!firstInput || !lastInput) {
                alert("Faculty name fields are missing.");
                return;
            }

            const firstName = firstInput.value.trim();
            const lastName = lastInput.value.trim();

            if (!firstName || !lastName) {
                alert("Both first and last names are required.");
                return;
            }

            recordData.name = `${firstName} ${lastName}`;

        // Combine Faculty and Student First Name and Last Name
        if ((currentEntity === "faculty" || currentEntity === "students") && field.name === "name") {
            const firstInput = recordForm.elements.namedItem("first_name");
            const lastInput = recordForm.elements.namedItem("last_name");

            if (!firstInput || !lastInput) {
                alert("Name fields are missing.");
                return;
            }

            const firstName = firstInput.value.trim();
            const lastName = lastInput.value.trim();

            if (!firstName || !lastName) {
                alert("Both first and last names are required.");
                return;
            }

            recordData.name = `${firstName} ${lastName}`;

            if (currentEntity === "students") {
                const firstInitial = firstName.charAt(0).toLowerCase();
                const surname = lastName.toLowerCase().replace(/\s+/g, "");

                recordData.email = `${firstInitial}${surname}@educorn.org`;
            }

            continue;
        }

        const input = recordForm.elements.namedItem(field.name);

            continue;
        }

        const input = recordForm.elements.namedItem(field.name);

        if (!input) {
            return;
        }

        const rawValue = input.value.trim();

        if (!rawValue) {
            alert(`${field.label} is required.`);
            input.focus();
            return;
        }

        if (field.type === "number" || field.source) {
            recordData[field.name] = Number(rawValue);
        } else {
            recordData[field.name] = rawValue;
        }
    }

    // Validate Course selections
    if (currentEntity === "sections") {
        const courseExists = schoolData.courses.some(
            course => course.id === recordData.course_id
        );

        if (!courseExists) {
            alert("Please select a valid course.");
            return;
        }
    }

    // Validate Section selections
    if (currentEntity === "enrollments") {
        const sectionExists = schoolData.sections.some(
            section => section.id === recordData.section_id
        );

        if (!sectionExists) {
            alert("Please select a valid section.");
            return;
        }
    }

    const backup = structuredClone(schoolData);

    if (editingId === null) {
        schoolData[currentEntity].push({
            id: currentEntity === "students"
            ? generateStudentId()
            : getNextId(schoolData[currentEntity]),
            ...recordData
        });
    } else {
        const record = schoolData[currentEntity].find(
            item => item.id === editingId
        );

        if (!record) {
            alert("Record not found.");
            return;
        }

        Object.assign(record, recordData);
    }

    if (!saveData()) {
        schoolData = backup;
        return;
    }

    renderAll();
    closeModal();
}

recordForm.addEventListener("submit", handleFormSubmit);

function deleteRecord(entity, id) {
    if (entity !== "faculty" && entity !== "enrollments" && entity !== "students") {
        return;
    }

    const record = schoolData[entity].find(
        item => item.id === (entity === "students" ? id : Number(id))
    );

    if (!record) {
        alert("Record not found.");
        return;
    }

    const confirmed = confirm(
        `Are you sure you want to delete ${entity} record #${record.id}?`
    );

    if (!confirmed) {
        return;
    }

    const backup = structuredClone(schoolData);

    schoolData[entity] = schoolData[entity].filter(
        item => item.id !== record.id
    );

    if (!saveData()) {
        schoolData = backup;
        return;
    }

    renderAll();
}

// =========================================
// 10. Modal Event Handling
// =========================================

closeModalButton.addEventListener("click", closeModal);
cancelButton.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

// =========================================
// 11. Initialize EduCorn
// =========================================

const initialSection = window.location.hash.substring(1);

showSection(
    document.getElementById(initialSection)?.classList.contains("page-section")
        ? initialSection
        : "dashboard"
);

renderAll();

console.log("EduCorn dashboard initialized successfully.");