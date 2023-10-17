// Function to simulate fetching student data using a Promise
function fetchStudentData() {
    return new Promise((resolve, reject) => {
        // Simulate fetching data from a server
        setTimeout(() => {
            const studentData = {
                name: 'Dina',
                age: 20,
                course: 'Computer Science'
            };
            resolve(studentData);
        }, 1000); // Simulate a 1-second delay
    });
}

// Function to display student details
function displayStudentDetails() {
    fetchStudentData()
        .then(studentData => {
            // Update the UI with student details
            document.getElementById('student-name').textContent = studentData.name;
            document.getElementById('student-age').textContent = studentData.age;
            document.getElementById('student-course').textContent = studentData.course;
        })
        .catch(error => {
            console.error('Error fetching student data:', error);
        });
}

// Call the function to display student details
displayStudentDetails();


