$(document).ready(function () {
  $(".column-headline a").click(function () {
    $(this).toggleClass("expanded");
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

  $(".btn-article-weight").click(function(){
    let articleWeight = $(this).text().split(" ");
    compareValue(articleWeight[0]);

    function compareValue(weight){
       if(weight==="500")
         changeValuesOnSelection("3,50","3,60", "500");
       else if(weight==="300")
         changeValuesOnSelection("2,80","2,90","300");
       else
         changeValuesOnSelection("2,10","2,60","250");  
    }

    function changeValuesOnSelection(discountedPrice,originalPrice,weight){
      $("#discounted-price").text(`${discountedPrice} €`);
      $("#original-price").text(`${originalPrice} €`);
      $("#weight").text(`${weight}`);
    }
  });
});
