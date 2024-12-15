document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Successful submission (for demonstration)
    alert(`Welcome, ${username}! Your account has been created successfully.`);

    // Optionally clear the form
    document.getElementById("signupForm").reset();
});
