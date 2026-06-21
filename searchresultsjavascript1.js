 // Attach click events to all APPLY buttons
document.querySelectorAll(".apply-btn").forEach(button => {
  button.addEventListener("click", function() {
    const jobTitle = this.closest(".job-box").getAttribute("data-title");
    goApply(jobTitle);
  });
});

function goApply(jobTitle) {
  // Redirect to application page with job title in query string
  window.location.href = "apply.html?job=" + encodeURIComponent(jobTitle);
}