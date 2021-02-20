$(document).ready(function () {  
    $(".column-headline a").click(function () {
        $(this).toggleClass("expanded");
        console.log("hi");
    });
    new Splide(".splide", {
      
      perPage: 5,
      pagination: false,
      gap: "1rem",
     
      breakpoints: {
        991: {
          perPage: 3,
        },
        767: {
          perPage: 1,
        },
      },
    }).mount();
});