
function searchJobs() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (query) {
    // Redirect to result page with query in URL
    window.location.href = "searchresults.html?job=" + encodeURIComponent(query);
  }
}










