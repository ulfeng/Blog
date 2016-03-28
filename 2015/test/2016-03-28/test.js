/**
 * Created by ulfeng on 2016/3/28.
 */

/**
 * 对象克隆
 * 支持基本数据类型及对象
 * 递归方法
 */
function clone(obj) {
    var o;
    switch (typeof obj) {
        case  "undefined":
            break;
        case "string":
            o = obj + "";
            break;
        case "number":
            o = obj - 0;
            break;
        case "boolean":
            o = obj;
            break;
        case "object": // object 分为两种情况 对象(Object)或数组(Array)
            if(obj===null){
                o=null;
            }else{
                if(Object.prototype.toString.call(obj).slice(8,-1)==="Array"){
                    o=[];
                    for(var i=0;i<obj.length;i++){
                        o.push(clone(obj[i]));
                    }else{
                        o={};
                        for(var k in obj){
                            o[k]=clone(obj[k]);
                        }
                    }
                }
                break;
                default:
                o=obj;
                break;
            }
            return o;

    }
}