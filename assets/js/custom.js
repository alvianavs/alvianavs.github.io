$(document).ready(function () {
  setTimeout(function () {
    $("#loader").hide();
    $(".main-content").addClass("opacity-100");
  }, 500);
  $("#sendme").on("click", function () {
    var message = $("#message").val();
    window.open(
      "https://api.whatsapp.com/send?phone=6285648905243&text=" +
        encodeURI(message),
      "_blank"
    );
  });

  $("nav ul li a").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );
    return false;
  });
});
