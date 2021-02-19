$(document).ready(function () {  
    $(".column-headline a").click(function () {
        $(this).toggleClass("expanded");
        console.log("hi");
    });
});