function showForm(jobTitle) {
  const form = document.getElementById("applicationForm");
  const title = document.getElementById("formTitle");
  title.textContent = "Apply for " + jobTitle;
  form.style.display = "block"; // show the form
}





