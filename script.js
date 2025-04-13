// script.js

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector("#searchBtn");
    const studentInfoDiv = document.querySelector("#studentInfo");
    const updateBtn = document.querySelector("#updateBtn");

    let students = [
        { name: "youssef", fullName: "yossef aarabbi", age: 20, location: "Casablanca", mark: 8 },
        { name: "Redouan", fullName: "Redouan essoubai", age: 24, location: "Rabat", mark: 19 },
        { name: "Aya", fullName: "Aya love", age: 19, location: "Tangier", mark: 15 },
        { name: "Hamza", fullName: "Hamza jmel", age: 21, location: "Marrakech", mark: 9 },
        { name: "mohamed", fullName: "mohamed el", age: 23, location: "Agadir", mark: 14 }
    ];

    // Search Button Logic
    searchBtn.addEventListener("click", function () {
        const studentNameInput = document.querySelector("#studentName").value.trim();
        const student = students.find(s => s.name.toLowerCase() === studentNameInput.toLowerCase());

        if (student) {
            const success = student.mark >= 10 ? "Success" : "Fail";
            studentInfoDiv.innerHTML = `
                <p>Full Name: ${student.fullName}</p>
                <p>Age: ${student.age}</p>
                <p>Location: ${student.location}</p>
                <p>Status: ${success}</p>
            `;
        } else {
            studentInfoDiv.innerHTML = `<p style="color: red;">Student not found. Please try again.</p>`;
        }
    });

    // Update Button Logic
    updateBtn.addEventListener("click", function () {
        const updateNameInput = document.querySelector("#updateName").value.trim();
        const updateFullNameInput = document.querySelector("#updateFullName").value.trim();
        const updateAgeInput = parseInt(document.querySelector("#updateAge").value);
        const updateLocationInput = document.querySelector("#updateLocation").value.trim();
        const updateMarkInput = parseInt(document.querySelector("#updateMark").value);

        const studentIndex = students.findIndex(s => s.name.toLowerCase() === updateNameInput.toLowerCase());

        if (studentIndex !== -1) {
            // Update existing student details
            students[studentIndex] = {
                name: updateNameInput,
                fullName: updateFullNameInput,
                age: updateAgeInput,
                location: updateLocationInput,
                mark: updateMarkInput
            };
            alert("Student details updated successfully!");
        } else {
            // Add new student if name doesn't exist
            students.push({
                name: updateNameInput,
                fullName: updateFullNameInput,
                age: updateAgeInput,
                location: updateLocationInput,
                mark: updateMarkInput
            });
            alert("New student added successfully!");
        }

        console.log(students); 
    });
});
