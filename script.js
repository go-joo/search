var size=10;
getList();
$("#list").on("click", "a", function(){
    var title=$(this).attr("title");
    var authors=$(this).attr("authors");
    var contents=$(this).attr("contents");
    var price=$(this).attr("price");
    var image=$(this).find("img").attr("src");
    $("#image").attr("src", image);
    $("#title").html(title);
    $("#authors").html(authors + "(" + price + "원)");
    $("#contents").html(contents);
});
$("#btnMore").on("click", function(){
    size +=5;
    getList();
});
$("#txtQuery").on("keydown", function(){
        size =10;
        getList(); 
});
function getList(){
    var query=$("#txtQuery").val();
    $.ajax({
        type:"get",
        url:url,
        headers:{"Authorization": "KakaoAK 696c16eaa4a3dfc09b778dd60435bb87"},
        data:{"query":query, "size":size},
        dataType:"json",
        success:function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}
