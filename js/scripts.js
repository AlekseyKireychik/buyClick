$(document).ready(function () {
  $(".header__link, .header__btn, .caption__btn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top - 50;
    $("body,html").animate({ scrollTop: top }, 500);
    $(".burger-menu__button").removeClass("is-active");
    $(".burger-menu").removeClass("is-active");
    $(".header__nav").removeClass("is-active");
    return false;
  });
  $(".burger-menu__button").on("click", function () {
    $(".burger-menu").toggleClass("is-active");
    $(".header__nav").toggleClass("is-active");
    $(".header__top").toggleClass("is-active");
    $("body").toggleClass("is-active");
  });
  
  $.extend($.validator.messages, {
    required: "Error"
  });

  $("#form__footer").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      mes: {
        required: true
      }
    }
  });

  $(".submit").one("click", function () {
    if ($("#form__footer").valid() == true) {
      $("#form__footer").submit(function (e) {
        e.preventDefault();
        var thisForm = $(this);
        var data = new FormData(thisForm[0]);
        $.ajax({
          url: "mail.php",
          data: data,
          processData: false,
          contentType: false,
          cache: false,
          type: "POST",
          success: function () {
            alert("The message was sent!");
            $("#form__footer")[0].reset();
          },
          error: function () {
            alert("The message is not sent!");
            $("#form__footer")[0].reset();
          }
        });
      });
    }
  });
});
