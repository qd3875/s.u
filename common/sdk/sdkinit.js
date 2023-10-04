(function(){
    /*获取当前script*/
    let script = getCurrentScript();
    let rootPath = getHost(script.src,3);
    window.smartInitHook=function(config){
        config.versionUrl=utils.uihost+"/boot/version.js";
        utils.rootPath=rootPath;
        config.plugins.sdk = [
            {js:rootPath+"/common/sdk/sdk.js"}
        ];
    }
    let utiljs = rootPath+"/common/smart-ui/boot/utils.js?from=element&plugins=sdk";
    document.write("<script src='"+utiljs+"'></script>");
    //根据路径进行按深度截取
    function getHost(src,length){
        let ss = src.split("/");
        ss.length = ss.length - length;
        let path = ss.join("/");
        return path;
    }
    function getCurrentScript() {
        let js = "sdkinit.js";
        let script = document.currentScript;
        if(!script && document.querySelector){
            script = document.querySelector("script[src*='"+js+"']");
        }
        if(!script){
            let scripts = document.getElementsByTagName("script");
            for (let i = 0, l = scripts.length; i < l; i++) {
                let src = scripts[i].src;
                if (src.indexOf(js) != -1) {
                    script = scripts[i];
                    break;
                }
            }
        }
        return script;
    }
})()
