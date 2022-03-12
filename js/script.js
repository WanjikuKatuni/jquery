// //to makes sure the jquery waits for the page to load so that it can run
// jQuery(document).ready(function () {
//   //jquery function
//   jQuery("h1").click(function () {
//     alert("This is a header");
//   });
//   jQuery("p").click(function () {
//     alert("This is a paragraph");
//     alert("I told you this is a paragraph");
//   });
//   jQuery("img").click(function () {
//     alert("This is how I look");
//     alert("That's me");
//   });
// });

// $(document).ready(function(){
//     $('h1').click(function(){
//         alert('the header')
//     })
//     $('p').click(function(){
//         alert('the paragraph')
//     })
//     $('img').click(function(){
//         alert('the image')
//         alert('beautiful image')
//     })

// })

//used to show the hidden image
// $(document).ready(function() {
//   $("p").click(function() {
//     $("img").show();
//   });
// });

// $(document).ready(function(){
//     $('p').click(function(){
//         $('img').show()
//     })
// })

// $(document).ready(function(){
//     $('p').click(function(){
//         $(".show-image").toggle()
//         $(".hide-image").toggle()
//     })
// })

// $(document).ready(function () {
//   $(".clickable").click(function () {
//     $("#show-image").slideToggle();
//     $("#hide-image").slideToggle();
//   });
// });

//how to add class when the button is clicked
// $(document).ready(function () {
//   $("button#green").click(function () {
//     //   remives calss from selected element
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });
//   $("button#yellow").click(function () {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });
//   $("button#red").click(function () {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
// });

$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello!<li>");
    $("ul#webpage").prepend("<li>Why Hello there.<li>")
    $("li").css("background-color", "green")
  });
  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye!<li>");
    $("ul#webpage").prepend("<li>Bye Bye<li>")
  });
  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop Copying me<li>");
    $("ul#webpage").prepend("<li>Okay.Sorry!!!<li>")
  });
});
