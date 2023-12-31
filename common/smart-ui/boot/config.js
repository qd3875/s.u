(function () {
    let c = {
        element:{version:"1.0.0",boot:"/ui-groups/element-plus/boot.js"},
        vant:{version:"1.0.0",boot:"/ui-groups/vant/boot.js"},
        plugins:{
            eruda:[{js:utils.uihost+"/plugins/eruda/eruda.js"}]
        },
        logo:utils.uihost+"/expand/logo_32.png",
        debug:false,
        versionUrl:utils.uihost+"/boot/version.js"
    };
    if(window.initConfig){
        window.initConfig(c);
    }
})()