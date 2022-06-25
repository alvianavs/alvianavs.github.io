$(document).ready(function () {
  setTimeout(function () {
    $("#loader").hide();
    $(".main-content").addClass("opacity-100");
  }, 1000);
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
$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    scrollDistance = scrollDistance + 100;

    // Assign active class to nav links while scolling
    $("section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $("nav ul li a.border-b-2.border-amber-400").removeClass(
          "border-b-2 border-amber-400"
        );
        $("nav ul li a").eq(i).addClass("border-b-2 border-amber-400");
      }
    });
  })
  .scroll();
