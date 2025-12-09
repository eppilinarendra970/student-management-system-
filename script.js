function loadStudents() {
    return JSON.parse(localStorage.getItem("students") || "[]");
}

function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;

    if (!id || !name || !age || !course || !marks) {
        alert("Fill all fields");
        return;
    }

    let students = loadStudents();
    students.push({ id, name, age, course, marks });
    saveStudents(students);

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}

function deleteStudent(index) {
    let students = loadStudents();
    students.splice(index, 1);
    saveStudents(students);
}

function displayStudents() {
    let students = loadStudents();
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((s, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.age}</td>
                <td>${s.course}</td>
                <td>${s.marks}</td>
                <td><button onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
    });
}

displayStudents();
