(function(){
    if(!window["$n"]){
        try{
            window["$n"] = parent["$n"];
        }catch (e){

        }
    }
    $n = null;
    if(!window["$n"]){
        $n = function(text){
            var map = {
                "common.tips":"提示",
                "common.ok":"确定",
                "common.cancel":"取消"
            }
            return map[text];
        }
    }else{
        $n = window["$n"];
    }
    utils.message = {
        msg:function(text,type){
            let that = this;
            if(!type){
                type = "default";
            }
            ElementPlus.ElMessage({
                message:text,
                type:type
            })
        },
        loading:function(text,target){
            let that = this;
            that.loadingService = ElementPlus.ElLoading.service({text:text,target:target})
        },
        cancelLoading:function(){
            let that = this;
            if(that.loadingService){
                that.loadingService.close();
            }
        },
        close:function (){
            ElementPlus.ElMessageBox.close();
        },
        alert:function(text,callback){
            ElementPlus.ElMessageBox.alert(text,$n('common.tips'),{callback:function (){
                if(callback){
                    callback();
                }
            },"showClose":false,
                "confirmButtonText":$n('common.ok'),
                "cancelButtonText":$n('common.cancel'),
                "dangerouslyUseHTMLString":true,
                "closeOnClickModal":false,
                "closeOnPressEscape":false,
                "closeOnHashChange":false,
            });
        },
        confirm:function(text,callback){
            ElementPlus.ElMessageBox.confirm(text,$n('common.tips'),{
                callback:function (e){
                    if(callback){
                        callback(e == "confirm"?1:0)
                    }
                },"showClose":false,
                "confirmButtonText":$n('common.ok'),
                "cancelButtonText":$n('common.cancel'),
                "dangerouslyUseHTMLString":true,
                "closeOnClickModal":false,
                "closeOnPressEscape":false,
                "closeOnHashChange":false,
            });
        },
        prompt:function(text,callback,def){
            ElementPlus.ElMessageBox.prompt(text,$n('common.tips'),{
                callback:function (e){
                    if(callback){
                        callback(e.action == "confirm"?1:0,e.value);
                    }
                },"showClose":false,
                "confirmButtonText":$n('common.ok'),
                "cancelButtonText":$n('common.cancel'),
                "dangerouslyUseHTMLString":true,
                "closeOnClickModal":false,
                "closeOnPressEscape":false,
                "closeOnHashChange":false,
                "inputValue":def
            });
        }
    }
})();