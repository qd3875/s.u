(function(){
    initIE5();
    const isTest = true;
    window.utils = initUtils();
    utils.uihost = getJsPath("utils.js",2);
    window.initConfig=function(config){
        if(window.smartInitHook){
            window.smartInitHook(config);
            utils.removeProp(window,"smartInitHook");
        }
        utils.config = config;
        if(utils.config.versionUrl){
            document.write('<script src="'+utils.config.versionUrl+'?_='+new Date().getTime()+'"></script>');
        }else if(utils.config.version){
            window.initVersion(utils.config);
        }
        utils.removeProp(window,"initConfig");
    };
    window.initVersion= function(vc){
        utils.config.version = vc.version;
        let config = utils.config;
        let version = config.version;
        utils.getCurrentBootScriptPath =function(){
            let script = document.currentScript;
            if(!script){
                script = document.querySelector("script[smart-boot-script]");
            }
            let path = script.src;
            let ss = path.split("/");
            ss.length = ss.length - 1;
            path = ss.join("/");
            utils.removeProp(utils,"getCurrentBootScriptPath");
            return path;
        };
        document.write('<script src="'+utils.jsUrl2blobUrl(utils.uihost+'/expand/core-expand.js?jsv='+version)+'"></script>');
        document.write('<script src="'+utils.jsUrl2blobUrl(utils.uihost+'/expand/smart-html.js?jsv='+version)+'"></script>');
        /*页面小图标,书签小图标*/
        let logo = "123456.png";
        document.write('<link id="web_shortcut" href="' + logo+'?jsv='+version+'" rel="shortcut icon" />');
        document.write('<link id="web_bookmark" href="' + logo+'?jsv='+version+'" rel="bookmark" />');
        /*禁用缓存*/
        document.write("<meta http-equiv=\"Cache-Control\" content=\"no-cache,no-store\">\n" +
            "<meta http-equiv=\"Pragma\" content=\"no-cache\">");
        utils.from = utils.from || "none";
        let from = config[utils.from];
        if(from){
            utils.uiVersion=from.version;
            document.write('<script smart-boot-script src="'+utils.uihost+from.boot+'?jsv='+version+'"></script>');
        };
        if(config.debug){
            if(utils.getParamer("debug") == "true"){
                utils.plugins.push("eruda");
                utils.delayAction(function(){
                    return window.eruda!=null;
                },function(){
                    window.eruda.init();
                });
            }
        };
        if(!config.plugins.router){
            config.plugins.router = [{js:utils.uihost+'/plugins/router/'+utils.from+'.router.js?jsv='+version}];
        }
        document.write('<script src="'+utils.jsUrl2blobUrl(utils.uihost+'/expand/utils-expand.js?jsv='+version)+'"></script>');
        document.write('<link href="' + utils.uihost+'/expand/utils-expand.css?jsv='+version+'" rel="stylesheet" type="text/css" />');
        initPlugins(config.plugins,utils.plugins);
        utils.removeProp(window,"initVersion");
    };
    document.write("<script src='"+utils.uihost+"/boot/config.js'></script>");
    function initPlugins(pluginMap,plugins) {
        let version = utils.config.version;
        for(let i=0;i<plugins.length;i++){
            let arrs = pluginMap[plugins[i]];
            if(!arrs){
                continue;
            }
            for(let n=0;n<arrs.length;n++){
                let plugin = arrs[n];
                if(!plugin){
                    continue;
                }
                if(plugin.js){
                    document.write('<script src="'+utils.urlAddProp(plugin.js,"jsv",version)+'"></script>');
                }
                if(plugin.css){
                    document.write('<link href="' + utils.urlAddProp(plugin.css,"jsv",version) + '" rel="stylesheet" type="text/css" />');
                }
            }
        }
    }
    function initUtils(){
        function initBigDb(that,fn){
            if(that.indexDb){
                fn(true);
                return;
            }
            window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            try{
                let req = window.indexedDB.open("smart-ui");
                req.onerror = function(event) {
                    if(fn){
                        fn(false);
                    }
                };
                req.onsuccess = function(e) {
                    that.indexDb = e.target.result;
                    if(fn){
                        fn(true);
                    }
                };
                req.onupgradeneeded = function (e){
                    e.target.result.createObjectStore('smartData', {
                        keyPath: 'key'
                    });
                }
            }catch(e){
                if(fn){
                    fn(false);
                }
            }
        }
        let tools = {
            getParamer: function (key) {
                let map = this.getSearch();
                return map[key];
            },
            getSearch: function () {
                let search = window.location.search;
                return this.getSearchByStr(search);
            },
            getSearchByStr:function(search){
                if (search) {
                    search = search.substring(1);
                } else {
                    return {};
                }
                let strsz = search.split("&");
                let map = {};
                for (let i=0; i<strsz.length; i++){
                    let strs = strsz[i];
                    if (strs.indexOf("=") != -1) {
                        let tempsz = strs.split("=");
                        let tempkey = tempsz[0];
                        let tempvalue = tempsz[1];
                        map[tempkey] = decodeURIComponent(tempvalue);
                    }
                }
                return map;
            },
            setLocalStorage:function(key,val){
                localStorage.setObject(key,val);
            },
            getLocalStorage:function(key){
                return localStorage.getObject(key);
            },
            delLocalStorage:function(key){
                localStorage.removeItem(key);
            },
            removeProp:function(obj,fieldName){
                try{
                    delete obj[fieldName];
                }catch (e) {
                    obj[fieldName] = undefined;
                }
            },
            delayAction:function(tjFn,acFn,maxDelay){
                let that = this;
                if(!maxDelay){
                    maxDelay = 24*60*60*1000;
                }
                if(maxDelay < 10000){
                    maxDelay = 10000;
                }
                let key = "da"+that.uuid();
                let timeKey = "time"+key;
                that[timeKey]=Date.now();
                that[key]=function () {
                    if(Date.now()-that[timeKey]>maxDelay){
                        that.removeProp(that,key);
                        that.removeProp(that,timeKey);
                    }else{
                        if(tjFn()){
                            that.removeProp(that,key);
                            that.removeProp(that,timeKey);
                            acFn();
                        }else{
                            setTimeout(that[key],100);
                        }
                    }
                }
                that[key]();
            },
            moduleImport:async function (str){
                const that = this;
                if(isTest){
                    return import(utils.rootPath+str);
                }
                let blob = null;
                if(window.plus){
                    //app模式
                    const text = window.plus.storage.getItem("js_"+str);
                    if(text){
                        blob = new Blob([text],{type:"application/javascript"});
                    }
                }else if(that.getBigData){
                    //浏览器模式
                    blob = await new Promise(function (success,error){
                        that.getBigData("js_"+str,function (data,flag){
                            success(data);
                        });
                    });
                }
                if(!blob){
                    const text = await fetch(utils.rootPath+str).then(function (res){return res.text();});
                    blob = new Blob([text],{type:"application/javascript"})
                    if(window.plus){
                        //app模式
                        window.plus.storage.setItem("js_"+str,text);
                    }else if(utils.getBigData){
                        //浏览器模式
                        utils.setBigData("js_"+str,blob);
                    }
                }
                return import(URL.createObjectURL(blob));
            },
            jsUrl2blobUrl:function (url){
                if(isTest){
                    return url;
                }
                const that = this;
                let blob = null;
                if(window.plus){
                    //app模式
                    const text = window.plus.storage.getItem("js_"+url);
                    if(text){
                        blob = new Blob([text],{type:"application/javascript"});
                    }
                }
                if(!blob){
                    const text = that.syncLoadData(url).responseText;
                    blob = new Blob([text],{type:"application/javascript"})
                    if(window.plus){
                        //app模式
                        window.plus.storage.setItem("js_"+url,text);
                    }
                }
                return URL.createObjectURL(blob);
            },
            uuid:function(){
                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                }
                return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
            },
            reloadUrl:function(url){
                if(!url){
                    url = window.location.href;
                }
                url = this.urlAddProp(url,"jsv",utils.config.version);
                window.location.href = url;
            },
            urlAddProp:function (url,key,val) {
                let jing = url.indexOf("#");
                let left = "";
                let right = "";
                if(jing== -1){
                    /*无#号情况*/
                    left = url;
                }else{
                    /*有#号情况*/
                    left = url.substring(0,jing);
                    right = url.substring(jing);
                }
                if(left.indexOf("?"+key+"=")!=-1 || left.indexOf("&"+key+"=")!=-1){
                    let start = left.indexOf("?"+key+"=");
                    if(start == -1){
                        start = left.indexOf("&"+key+"=");
                    }
                    let end = left.indexOf("&",start+1);
                    if(end == -1){
                        end = left.length;
                    }
                    right = left.substring(end)+right;
                    left = left.substring(0,start+1);
                }else{
                    let type = left.indexOf("?") != -1?"&":"?";
                    left += type;
                }
                let data = key+"="+val;
                return left+data+right;
            },
            /*延时执行,延时期间内多次调用只算最后一次*/
            delayOneAction:function (keyOrOptions,time,callback) {
                let type = Object.prototype.toString.call(keyOrOptions);
                let options = keyOrOptions;
                if(type == "[object String]"){
                    options = {
                        key:keyOrOptions,
                        time:time,
                        callback:callback
                    }
                }
                /*key,time,callback*/
                let that = this;
                if(!that.actionOne){
                    that.actionOne = {};
                }
                if(!that.actionOne[options.key]){
                    that.actionOne[options.key] = {};
                }
                let action = that.actionOne[options.key];
                if(!action.callbacks){
                    action.callbacks = [];
                    action.key = options.key;
                    setTimeout(function () {
                        let callback = action.callbacks.pop();
                        that.removeProp(that.actionOne,action.key);
                        callback();
                    },options.time);
                }
                action.callbacks.push(options.callback);
            },
            syncLoadData:function(url,fn){
                let xmlhttp;
                if (window.XMLHttpRequest){
                    xmlhttp=new XMLHttpRequest();
                }else{
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function(){
                    if(xmlhttp.readyState==4){
                        if(xmlhttp.status == 200){
                            if(fn){
                                try{
                                    fn(xmlhttp.responseText);
                                }catch (e) {
                                    fn();
                                }
                            }
                        }else{
                            if(fn){
                                fn();
                            }
                        }

                    }
                }
                xmlhttp.open("GET",url,false);
                xmlhttp.send();
                return xmlhttp;
            },
            setFormData:function(formSelect,data) {
                actionFormData(formSelect,function(field,type,name) {
                    let value = data[name];
                    if(type == "radio" || type == "checkbox"){
                        field.checked = value == field.value;
                    }else{
                        if(!value && value != 0){
                            value = "";
                        }
                        field.value = value;
                    }
                });
            },
            getFormData:function(formSelect) {
                let data = {};
                actionFormData(formSelect,function(field,type,name) {
                    if(type == "radio" || type == "checkbox"){
                        if(field.checked){
                            data[name] = field.value;
                        }
                    }else{
                        data[name] = field.value;
                    }
                });
                return data;
            },
            documentReady:function (callback) {
                if(!callback){
                    return;
                }
                this.delayAction(function () {
                    return document.readyState == "complete";
                },callback);
            },
            copyText:function (text){
                if(navigator.clipboard && navigator.clipboard.writeText){
                    navigator.clipboard.writeText(text);
                    return true;
                }else{
                    let input = document.createElement("input");
                    document.body.appendChild(input);
                    input.value = text;
                    input.select();
                    let flag = document.execCommand('copy');
                    document.body.removeChild(input);
                    return flag;
                }
            },
            pasteText:function(){
                if(window.clipboardData && window.clipboardData.getData){
                    return Promise.resolve(window.clipboardData.getData("Text"));
                }else if(navigator.clipboard){
                    return navigator.clipboard.readText();
                }else{
                    return Promise.reject("当前浏览器不支持");
                }
            },
            getCookie:function(key){
                let arr = document.cookie.match(new RegExp("(^| )"+key+"=([^;]*)(;|$)"));
                if(arr != null){
                    return unescape(arr[2]);
                }else{
                    return null;
                }
            },
            setCookie:function(key,value){
                let Days = 365*100;
                let exp  = new Date();
                exp.setTime(exp.getTime() + Days*24*60*60*1000);
                document.cookie = key + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
            },
            delCookie:function (key){
                let exp = new Date();
                exp.setTime(exp.getTime() - 1);
                document.cookie= key + "=;expires="+exp.toGMTString()+";path=/";
            },
            setBigData:function(key,val,fn){
                let that = this;
                if(val === undefined){
                    val = null;
                }
                that.getBigData(key,function (data,flag){
                    if(!flag){
                        if(fn){
                            fn(false);
                        }
                        return;
                    }
                    let req;
                    if(data === undefined){
                        //新增
                        req = that.indexDb.transaction(['smartData'], 'readwrite')
                            .objectStore('smartData')
                            .add({ key: key,val:val});
                    }else{
                        //修改
                        req = that.indexDb.transaction(['smartData'], 'readwrite')
                            .objectStore('smartData')
                            .put({ key: key,val:val});
                    }
                    req.onsuccess = function (event) {
                        if(fn){
                            fn(true)
                        }
                    };
                    req.onerror = function (event) {
                        if(fn){
                            fn(false)
                        }
                    }
                });
            },
            getBigData:function(key,fn){
                let that = this;
                initBigDb(that,function (flag){
                    if(!flag){
                        if(fn){
                            fn(undefined,false);
                        }
                        return;
                    }
                    let req = that.indexDb.transaction(["smartData"]).objectStore("smartData").get(key);
                    req.onerror = function(event) {
                        if(fn){
                            fn(undefined,false);
                        }
                    };
                    req.onsuccess = function(event) {
                        if(fn){
                            let data = undefined;
                            if(req.result!==undefined){
                                data = req.result.val;
                            }
                            fn(data,true);
                        }
                    };
                });
            },
            delBigData:function(key,fn){
                let that = this;
                initBigDb(that,function (flag){
                    if(!flag){
                        if(fn){
                            fn(false);
                        }
                        return;
                    }
                    let req = that.indexDb.transaction(["smartData"],"readwrite").objectStore("smartData").delete(key);
                    req.onerror = function(event) {
                        if(fn){
                            fn(false);
                        }
                    };
                    req.onsuccess = function(event) {
                        if(fn){
                            fn(true);
                        }
                    };
                });
            },
            allBigData:function (fn) {
                let that = this;
                initBigDb(that,function (flag){
                    if(!flag){
                        if(fn){
                            fn(undefined,false);
                        }
                        return;
                    }
                    let os = that.indexDb.transaction(["smartData"]).objectStore("smartData");
                    let map = {};
                    os.openCursor().onsuccess = function (event) {
                        let cursor = event.target.result;
                        if (cursor) {
                            map[cursor.key]=cursor.value;
                            cursor.continue();
                        } else {
                            fn(map,true);
                        }
                    };
                });
            }
        }
        let jsSearch = getJsSearch("utils.js");
        let plugins = [];
        if(jsSearch.plugins && jsSearch.plugins.trim()){
            plugins=jsSearch.plugins.trim().split(",");
        }
        jsSearch.plugins = plugins;
        for(let key in jsSearch){
            tools[key] = jsSearch[key];
        }
        function getJsSearch(js){
            let scripts = document.getElementsByTagName("script");
            let map = {};
            let c;
            for (let i = 0, l = scripts.length; i < l; i++) {
                let src = scripts[i].src;
                if ((c = src.indexOf(js) ) != -1) {
                    map = tools.getSearchByStr(src.substring(c+js.length));
                    break;
                }
            }
            return map;
        }
        function actionFormData(formSelect,callback){
            let form = document.querySelector(formSelect);
            if(!form){
                console.warn("表单不可为空")
                return;
            }
            let inputs = document.querySelectorAll(formSelect+" input");
            let selects = document.querySelectorAll(formSelect+" select");
            let textareas = document.querySelectorAll(formSelect+" textarea");
            let fields = [];
            for(let i=0;i<inputs.length;i++){
                fields.push(inputs[i]);
            }
            for(let i=0;i<selects.length;i++){
                fields.push(selects[i]);
            }
            for(let i=0;i<textareas.length;i++){
                fields.push(textareas[i]);
            }
            for(let i=0;i<fields.length;i++){
                let field = fields[i];
                let name = field.getAttribute("name");
                if(!name){
                    continue;
                }
                let type = field.getAttribute("type");
                callback(field,type,name);

            }
        }
        return tools;
    }
    function getJsPath(js, length) {
        let scripts = document.getElementsByTagName("script");
        let path = "";
        for (let i = 0, l = scripts.length; i < l; i++) {
            let src = scripts[i].src;
            if (src.indexOf(js) != -1) {
                path = src;
                break;
            }
        }
        let ss = path.split("/");
        ss.length = ss.length - length;
        let url = ss.join("/");
        return url;
    }
    function initIE5(){
        /*改变json格式化--开始*/
        Date.prototype.toJSON = function () {
            return this.format("yyyy-MM-dd HH:mm:ss.fff");
        };
        Storage.prototype.getObject = function(key){
            let szStr = this.getItem(key);
            if(!szStr){
                szStr = "[]";
            }
            let sz = JSON.parse(szStr);
            return sz[0];
        };
        Storage.prototype.setObject = function(key,val){
            let sz = [val];
            if(val === undefined){
                sz = [];
            }
            this.setItem(key,JSON.stringify(sz));
        };
        /*增加string的trim方法*/
        if(!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, '');
            }
        }
        /*增加string的startsWith方法*/
        if(!String.prototype.startsWith) {
            String.prototype.startsWith = function(str) {
                return this.indexOf(str) == 0;
            }
        }
        /*增加Date的now方法*/
        if(!Date.now) {
            Date.now = function() {
                return new Date().getTime();
            }
        }
        /*防止操作地址栏报错*/
        if(!history.pushState){
            history.pushState = function(){};
        }
    }
})();
