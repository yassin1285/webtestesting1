 // Show only the matching job
    function showResult() {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("job");
      const jobs = document.querySelectorAll(".job-box");

      jobs.forEach(job => {
        const title = job.getAttribute("data-title");
        if (title.includes(query)) {
          job.style.display = "block";
        } else {
          job.style.display = "none";
        }
      });
    }

    function goHome() {
      window.location.href = "index.html";
    }
    showResult();










 function goApply(jobTitle) {
  // Redirect to application page with job title in query string
  window.location.href = "apply.html?job=" + encodeURIComponent(jobTitle);
}