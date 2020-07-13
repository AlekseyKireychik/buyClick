$(document).ready(function () {
  $(".caption__btn").on("click", function (event) {
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

  $(".check__block-input").on("click", function (event) {
    $(this).closest(".products__item").toggleClass("checked");
  });

  if ($(document).scrollTop() > $(".fixed-top").height()) {
    $(".fixed-top").toggleClass("scrolled");
  }

  $(window).on("scroll", function() {
    $(".container__header").toggleClass(
      "scrolled",
      $(this).scrollTop() > $(".container__header").height() * 2
    );
  });

  // $.extend($.validator.messages, {
  //   required: "Error"
  // });

  // $("#form__footer").validate({
  //   rules: {
  //     name: {
  //       required: true
  //     },
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     mes: {
  //       required: true
  //     }
  //   }
  // });

  // $(".submit").one("click", function () {
  //   if ($("#form__footer").valid() == true) {
  //     $("#form__footer").submit(function (e) {
  //       e.preventDefault();
  //       var thisForm = $(this);
  //       var data = new FormData(thisForm[0]);
  //       $.ajax({
  //         url: "mail.php",
  //         data: data,
  //         processData: false,
  //         contentType: false,
  //         cache: false,
  //         type: "POST",
  //         success: function () {
  //           alert("The message was sent!");
  //           $("#form__footer")[0].reset();
  //         },
  //         error: function () {
  //           alert("The message is not sent!");
  //           $("#form__footer")[0].reset();
  //         }
  //       });
  //     });
  //   }
  // });
});
