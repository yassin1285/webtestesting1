
function goHome() {
    // Change "index.html" to the actual filename of your homepage
    window.location.href = "index.html";
  }


  


  function goApply(jobTitle) {
  // Redirect to application page with job title in query string
  window.location.href = "apply.html?job=" + encodeURIComponent(jobTitle);
}

