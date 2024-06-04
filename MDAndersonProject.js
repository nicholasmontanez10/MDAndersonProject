document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Redirect to thank you page
    window.location.href = "MDthankyou.html";
});
