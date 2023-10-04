(function(){
    /**破解防盗链组件---开始*/
    utils.fdlImgMap = {};
    function actionFdl() {
        let list = document.querySelectorAll("imgfdl");
        for(let i=0;i<list.length;i++){
            let imgfdl = list[i];
            let src = imgfdl.getAttribute("src");
            let saveAble = imgfdl.getAttribute("save-able");
            if(!saveAble){
                saveAble = "1";
            }
            if(src == imgfdl.srcUrl && saveAble == imgfdl.saveAble){
                continue;
            }
            imgfdl.srcUrl = src;
            imgfdl.saveAble = saveAble;
            let iframeId = "iframe"+utils.uuid();
            let clickVal = saveAble == "1" ? "none":"block";
            utils.fdlImgMap[iframeId] = "<div style=\"display:"+clickVal+";\" onclick=\"parent.document.getElementById('"+iframeId+"').click()\"></div><img onclick=\"parent.document.getElementById('"+iframeId+"').click()\" src=\""+imgfdl.srcUrl+"\" /> <style>html,body,img,div{width:100%;height:100%;margin:0;}div{position:fixed;z-index:999;}</style>";
            imgfdl.innerHTML = "<iframe id=\""+iframeId+"\" src=\"javascript:parent.utils.fdlImgMap."+iframeId+"\" frameBorder=\"0\" scrolling=\"no\" width='100%' height='100%'></iframe>";
        };
        setTimeout(actionFdl,300);
    }
    actionFdl();
    let imgFdlStyle = "<style>imgfdl{display:inline-block;}</style>";
    document.write(imgFdlStyle);
    /**破解防盗链组件---结束*/
})()
