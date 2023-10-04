(function(){
    /**
     * 此代码解决版本控制缓存问题
     */
    let version = localStorage.getItem("last_version");
    if(!version){
        version = "0";
    }
    let c = {
        version:version
    };
    if(window.initVersion){
        window.initVersion(c);
    }
})()