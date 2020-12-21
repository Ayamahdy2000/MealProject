$(document).ready(function(){
    

$("#button").click(function(){
    $("#nav")
    .show()
    .animate({
        width:"300px"
    },700,function(){
        $(".content").slideDown(1000);
    })

    $(this).hide();
    $("#exitbutton").show();
  
});

$("#exitbutton").click(function(){
   
    $(".content").slideUp(1000,function(){
        $("#nav").animate({
            width:"hide"
        },700)
    });
    $(this).hide();
    $("#button").show();
   
  
});
$(".content").click(function(){
    $(".content").slideUp(1000,function(){
        $("#nav").animate({
            width:"hide"
        },700)
    });
    $("#exitbutton").hide();
    $("#button").show();
})


$("#breakfast").click(function(){
    $(this).css({
        "color": "#ff7a5c",
        "border-color": "#ff7a5c"

    });
    $("#brunch").css({
        "color": "gray",
        "border-color": "gray"

    });
    $("#dinner").css({
        "color": "gray",
        "border-color": "gray"

    });
    //first-card
    $("#firstimg").attr("src", "images/img_1.jpg");
    $("#firsttitle").text("Warm Spinach Dip & Chips");
    $("#firsttext").text("Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa. ");
    $("#firstprice").text("$10.49");
    //second-card
    $("#secondimg").attr("src", "images/img_2.jpg");
    $("#secondtitle").text("Key Wast Machos");
    $("#secondtext").text("Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.");
    $("#secondprice").text("$11.99");
    //third-card
    $("#thirdimg").attr("src", "images/img_3.jpg");
    $("#thirdtitle").text("Crispy Onions Rings");
    $("#thirdtext").text("A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.");
    $("#thirdprice").text("$11.99");
    //fourth-card
    $("#fourthimg").attr("src", "images/img_4.jpg");
    $("#fourthtitle").text("Lobster & Shrimp Quesadilla");
    $("#fourthtext").text("Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.");
    $("#fourthprice").text("$13.99");

});
$("#brunch").click(function () {
    $(this).css({
        "color": "#ff7a5c",
        "border-color": "#ff7a5c"

    });
    $("#breakfast").css({
        "color": "gray",
        "border-color": "gray"

    });
    $("#dinner").css({
        "color": "gray",
        "border-color": "gray"

    });
    //first-card
    $("#firstimg").attr("src", "images/img_2.jpg");
    $("#firsttitle").text("jumbo lump crab stack");
    $("#firsttext").text("Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.");
    $("#firstprice").text("$12.49");
    //second-card
    $("#secondimg").attr("src", "images/img_1.jpg");
    $("#secondtitle").text("jamaican chicken wings");
    $("#secondtext").text("Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.");
    $("#secondprice").text("$15.99");
    //third-card
    $("#thirdimg").attr("src", "images/img_4.jpg");
    $("#thirdtitle").text("bahamian seafood chowder");
    $("#thirdtext").text("Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.");
    $("#thirdprice").text("$10.99");
    //fourth-card
    $("#fourthimg").attr("src", "images/img_3.jpg");
    $("#fourthtitle").text("grilled chicken & tropical fruit on mixed greens");
    $("#fourthtext").text("A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.");
    $("#fourthprice").text("$12.99");

});
$("#dinner").click(function () {
    $(this).css({
        "color": "#ff7a5c",
        "border-color": "#ff7a5c"

    });
    $("#breakfast").css({
        "color": "gray",
        "border-color": "gray"

    });
    $("#brunch").css({
        "color": "gray",
        "border-color": "gray"

    });
    //first-card
    $("#firstimg").attr("src", "images/img_3.jpg");
    $("#firsttitle").text("jumbo lump crab stack");
    $("#firsttext").text("Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.");
    $("#firstprice").text("$12.49");
    //second-card
    $("#secondimg").attr("src", "images/img_4.jpg");
    $("#secondtitle").text("jamaican chicken wings");
    $("#secondtext").text("Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.");
    $("#secondprice").text("$15.99");
    //third-card
    $("#thirdimg").attr("src", "images/img_1.jpg");
    $("#thirdtitle").text("bahamian seafood chowder");
    $("#thirdtext").text("Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.");
    $("#thirdprice").text("$10.99");
    //fourth-card
    $("#fourthimg").attr("src", "images/img_2.jpg");
    $("#fourthtitle").text("grilled chicken & tropical fruit on mixed greens");
    $("#fourthtext").text("A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.");
    $("#fourthprice").text("$12.99");

});
$(window).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    console.log(offset);
     if (startchange.length){
    $(window).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar-default").css('background-color', '#fff');
           $(".box").css({
               "background-color":"black",
               "color":"#fff"
           })
        } else {
           $('.navbar-default').css('background-color', 'transparent');
           $(".box").css({
            "background-color":"transparent",
            "color":"black"
        })
        }
    });
     }
 });

})