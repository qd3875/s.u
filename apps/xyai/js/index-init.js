(function (){
    document.addEventListener("mousedown",function () {
        webos.inface.toTopWin(window);
    });
    const searchParams=new URL(location.href).searchParams;
    var expAction = searchParams.get("expAction");
    if(expAction == "new"){
        var ext = searchParams.get("ext");
        var func = searchParams.get("func");
        parent[func](new Blob());
        return;
    };
})()