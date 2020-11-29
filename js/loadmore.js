/* Load more buttons */

$(document).ready(function() {
  $("#toggle1").click(function() {
    var elem = $("#toggle1").text();
	var moreText = document.getElementById("more1");
    if (elem == "Load More") {
      //Stuff to do when btn is in the read more state
      $("#toggle1").text("Load Less");
      moreText.style.display = "inline";
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle1").text("Load More");
      moreText.style.display = "none";
    }
  });
});

$(document).ready(function() {
  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
	var moreText = document.getElementById("more2");
    if (elem == "Load More") {
      //Stuff to do when btn is in the read more state
      $("#toggle2").text("Load Less");
      moreText.style.display = "inline";
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle2").text("Load More");
      moreText.style.display = "none";
    }
  });
});

$(document).ready(function() {
  $("#toggle3").click(function() {
    var elem = $("#toggle3").text();
	var moreText = document.getElementById("more3");
    if (elem == "Load More") {
      //Stuff to do when btn is in the read more state
      $("#toggle3").text("Load Less");
      moreText.style.display = "inline";
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle3").text("Load More");
      moreText.style.display = "none";
    }
  });
});

$(document).ready(function() {
  $("#toggle4").click(function() {
    var elem = $("#toggle4").text();
	var moreText = document.getElementById("more4");
    if (elem == "Load More") {
      //Stuff to do when btn is in the read more state
      $("#toggle4").text("Load Less");
      moreText.style.display = "inline";
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle4").text("Load More");
      moreText.style.display = "none";
    }
  });
});
