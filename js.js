$(function () {
  //  $("#kezd").on("click", init);
    init();
});
function init(){
    $("#jatekter").empty();
    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id":(i+1)});

    $("#jatekter img").eq(i).attr({"src": "kartya/kartya/hatlap.jpg", "alt": "Hátlap"});


    //$("#jatekter img").eq(i).attr({"src": "fajlnev", "alt": "Kártyalap"});
    }   
    $("#jatketer div").click(lapcsere);
    $("#jatekter").hover(function(){
        $(this).addClass("kartya");
    },
    function(){
        $(this).removeClass("kartya");
    }
    );
    
}
 function lapcsere(){
      var i = $(this).attr("id");
         var fajlnev="kartya/kartya/"+(i)+".png";

        console.log(fajlnev);
        $("#jatketer img").eq(i-1).attr({"src": fajlnev, "alt": "Kártyalap"});
 
 }
