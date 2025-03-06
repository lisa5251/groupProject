document.getElementById('searchBar').addEventListener('keyup', function () {
    let searchText = this.value.toLowerCase();
    let cars = document.querySelectorAll('.car-card');

    cars.forEach(function (car) {
        let title = car.querySelector('.car-title').textContent.toLowerCase();
        if (title.includes(searchText)) {
            car.style.display = "block"; // Show matching cars
        } else {
            car.style.display = "none"; // Hide non-matching cars
        }
    });
});
function validateForm(event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Get form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var isValid = true;
    var errorMessage = "Ju lutem plotseoni mire!";


    if (name.value == null) {
        isValid = false;
        // errorMessage += "Name is required.\n";
        alert(errorMessage);
    }

   
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.tri() === "") {
        isValid = false;
        errorMessage += "Email is required.\n";
    } else if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
    }


    if (message.trim() === "") {
        isValid = false;
        errorMessage += "Message is required.\n";
    }

    // Display error messages if validation fails
    if (!isValid) {
        alert(errorMessage);
    } else {
        // Proceed with form submission (example: alert message)
        alert("Form submitted successfully!");
        // Uncomment the line below to actually submit the form:
        document.getElementById("contactForm").submit();
    }

    return isValid;
}