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


$(document).ready(function(){
    $('h1').click(function(){
        alert('the header')
    })
    $('p').click(function(){
        alert('the paragraph')
    })
    $('img').click(function(){
        alert('the image')
        alert('beautiful image')
    })

})