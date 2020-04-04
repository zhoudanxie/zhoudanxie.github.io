/* Load more button */

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
	var moreText = document.getElementById("loadmore");
    if (elem == "Load More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Load Less");
      moreText.style.display = "inline";
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Load More");
      moreText.style.display = "none";
    }
  });
});