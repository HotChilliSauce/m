//헤더와 푸터불러오기
$(document).ready(function(){
    $("#header").load("/include/header.html");
    $("#footer").load("/include/footer.html");
    /*id 지정을 통해서도 가능합니다.
     $("#header").load("header.html #navBar")
    */
 });