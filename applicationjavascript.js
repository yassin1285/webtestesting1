// Update form title dynamically based on job selected
    const params = new URLSearchParams(window.location.search);
    const job = params.get("job");
    if (job) {
      document.getElementById("formTitle").textContent = "Apply for " + job;
    }

    function goHome() {
      window.location.href = "index.html"; // adjust if homepage has another name
    }


    // Handle form submission
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Collect form data into JSON
  const formData = {
    job: job,
    name: event.target.name.value,
    surname: event.target.surname.value,
    email: event.target.email.value,
    phone: event.target.phone.value
  };

  // Fill confirmation box with JSON values
  document.getElementById("appliedJob").textContent = "Job: " + formData.job;
  document.getElementById("appliedName").textContent = formData.name;
  document.getElementById("appliedSurname").textContent = formData.surname;
  document.getElementById("appliedEmail").textContent = formData.email;
  document.getElementById("appliedPhone").textContent = formData.phone;

  // Hide form and show confirmation
  document.querySelector(".form-box").style.display = "none";
  document.getElementById("confirmationBox").style.display = "block";

  // Debug: log JSON data to console
  console.log("Application submitted:", JSON.stringify(formData, null, 2));
});