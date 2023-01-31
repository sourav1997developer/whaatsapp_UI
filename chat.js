// Chat showing number of charcters
$(".chat-msg").each(function () {
  fulltext = $(this).text();
  if ($(this).text().length > 30) {
    $(this).text($(this).text().substr(0, 27));
    $(this).append("...");
  }
});

// Chat image upload
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
