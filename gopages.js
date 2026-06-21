function goPage(page)
    {window.location.href=page;  }


    function goApply(jobTitle) {
  // Redirect to application page with job title in query string
  window.location.href = "apply.html?job=" + encodeURIComponent(jobTitle);
}

function goHome() {
  window.location.href = "index.html"; // adjust if homepage has another name
}


const params = new URLSearchParams(window.location.search);
const job = params.get("job");
if (job) {
  document.getElementById("formTitle").textContent = "Apply for " + job;
}






