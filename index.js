
const path = require("path");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);


const port = process.env.PORT || 3000;

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(__dirname));

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

$('ul.navbar-nav>li').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    $('body').animate({ scrollTop: $anchor.top },1000);
    return false;
});

// $('#sec-1').addClass("active");


//       $("#sec-1").click(function() {
//            $('html, body').animate({
//                scrollTop:        $("#one").offset().top-66
//            }, 1000);
//         return false;
//        });
      
//       $("#sec-2").click(function() {
//            $('html, body') .animate({
//                scrollTop:        $("#two").offset().top-112
//            }, 1000);
//         return false;
//        });
      
//       $("#sec-3").click(function() {
//            $(' html,body') .animate({
//                scrollTop:        $("#three").offset().top-112
//            }, 1000);
//         return false;
//        });
      
//       $("#sec-4").click(function() {
//         $(this).addClass("active");
//            $('html,body ') .animate({
//                scrollTop:        $("#four").offset().top-112
//            }, 1000);
//         return false;
//        });
//        $('#two').waypoint(function() {
      
//         $(".container ul li").children().removeClass("active");
//         $("#sec-2").addClass("active");
        
//       }, { offset: 101 });
      
      
//       $('#three').waypoint(function() {
//         $(".container ul li").children().removeClass("active");
//         $("#sec-3").addClass("active");
//       }, { offset: 101 });
      
//       $('#four').waypoint(function() {
//         $(".container ul li").children().removeClass("active");
//         $("#sec-4").addClass("active");
//       }, { offset: 101 });
      
//       $('#one').waypoint(function() {
//         $(".container ul li").children().removeClass("active");
//         $("#sec-1").addClass("active");
//       }, { offset: 0 });
       
// document.addEventListener("DOMContentLoaded", () => {
//       //  little hack to detect if the user is on ie 11
//       const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
//       // get all the links with an ID that starts with 'sectionLink'
//       const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
//       // loop over all the links
//       listOfLinks.forEach(function (link) {
//         // listen for a click
//         link.addEventListener('click',  () => {
//           // toggle highlight on and off when we click a link
//           listOfLinks.forEach( (link) => {
//             if (link.classList.contains('highlighted')) {
//               link.classList.remove('highlighted');
//             }
//           });
//           link.classList.add('highlighted');
//           // get the element where to scroll
//           let ref = link.href.split('#sectionLink');
//           ref = "#section" + ref[1];
//           // ie 11 does not support smooth scroll, so we will simply scroll
//           if (isIE11) {
//             window.scrollTo(0, document.querySelector(ref).offsetTop);
//           } else {
//             window.scroll({
//               behavior: 'smooth',
//               left: 0,
//               // top gets the distance from the top of the page of our target element
//               top: document.querySelector(ref).offsetTop
//             });
//           }
//         })
//       })
//     })

