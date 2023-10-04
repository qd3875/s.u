(function (){
    document.addEventListener("mousedown",function () {
        try{
            webos.inface.toTopWin(parent);
        }catch (e){

        }
    });
    window.htmlEncode = function(str, notSpace) {
        return str && 0 != str.length ? str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : ""
    }
    window.functionHook = function(target, method, beforeFunc, afterFunc) {
        var context = target || window
            , _theMethod = context[method];
        if (!context || !_theMethod)
            return console.error("method error!", method);
        beforeFunc || afterFunc || (beforeFunc = function() {
                console.error("hook:" + method, arguments)
            }
        ),
            context[method] = function() {
                var args = arguments;
                if (beforeFunc) {
                    var newArgs = beforeFunc.apply(this, args);
                    if (!1 === newArgs)
                        return newArgs;
                    args = newArgs === undefined ? args : newArgs
                }
                newArgs = _theMethod.apply(this, args);
                return newArgs = afterFunc ? (args = afterFunc.apply(this, [newArgs, args])) === undefined ? newArgs : args : newArgs
            }
        ;
        var hookKey = "__hookBefore";
        target[hookKey] || (target[hookKey] = {}),
        target[hookKey][method] || (target[hookKey][method] = _theMethod),
        target["_unhook"] || (target["_unhook"] = function(methodName) {
                var beforeFunc;
                if (target[hookKey])
                    if (methodName)
                        (beforeFunc = target[hookKey][methodName]) && (target[hookKey][methodName] = null,
                            target[methodName] = beforeFunc);
                    else
                        for (var key in target[hookKey])
                            (beforeFunc = target[hookKey][key]) && (target[hookKey][key] = null,
                                target[key] = beforeFunc)
            }
        )
    }
})()