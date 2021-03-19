// $(document).ready(function(){        use this .ready if your jqury and js script is in head section
//     $("h1").css("color","red");
// })

//$("h1").css("color","red");           if jQuery and Js at end before body no need of .ready

$("h1").addClass("bigTitle margin"); //keeping styling to css
$("h1").text("Bye"); //Manipulating text with jQuery
$("button").html("<em>HEY!</em>");

$("a").attr("href", "https://yahoo.com"); //manipulating attributes

$("h1").click(function () {
  $("h1").css("color", "red");
});

$("button").on("click",function(){           //addeventListner using jquery
    $("h1").css("color","purple");
});

$("input").keypress(function(){
    console.log(event.key);
});
$(document).keypress(function(){
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").before("<button>Button</button>");      //adding element through jquery
$("h1").after("<button>Button</button>");
$("h1").prepend("<button>Button</button>");
$("h1").append("<button>Button</button>");


//$("button").remove();                     //removing element 

$("button").on("click",function(){       
   // $("h1").hide();                         //hides H1
   //$("h1").toggle();
  // $("h1").fadein();
  // $("h1").fadeout();
    //$("h1").slideUp();
   // $("h1").slideDown();
   $("h1").animate({opacity:0.5});          //custom animation
});