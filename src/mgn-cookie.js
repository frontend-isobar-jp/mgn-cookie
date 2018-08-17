/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnCookie = factory();
    }
}(this, function() {

    function mgnCookie() {}

    /**
    **
    ** SetCookie
    **
    **/
    mgnCookie.prototype.SetCookie = function( cookieName, value, expiredays ) {

        // pathの指定
        var path = location.pathname;

        // pathをフォルダ毎に指定する場合のIE対策
        var paths = new Array();
        paths = path.split("/");

        if(paths[paths.length-1] != ""){
            paths[paths.length-1] = "";
            path = paths.join("/");
        }

        // 有効期限の日付
        var extime = new Date().getTime();
        var cltime = new Date(extime + (60*60*24*1000*expiredays));
        var exdate = cltime.toUTCString();

        // クッキーに保存する文字列を生成
        var s = "";
        s += cookieName + "=" + escape(value);// 値はエンコードしておく
        s += "; path="+ path;

        if(expiredays){
            s += "; expires=" + exdate + "; ";
        }else{
            s += "; ";
        }

        // クッキーに保存
        document.cookie = s;

    }

    /**
    **
    ** GetCookie
    **
    **/
    mgnCookie.prototype.GetCookie = function( cookieName ) {

        var st = "";
        var ed = "";

        if( document.cookie.length > 0 ){
            // クッキーの値を取り出す
            st = document.cookie.indexOf(cookieName + "=");
            if(st != -1){
                st = st + cookieName.length + 1;
                ed = document.cookie.indexOf(";", st);
                if(ed == -1) ed = document.cookie.length;
                // 値をデコードして返す
                return unescape(document.cookie.substring(st,ed));
            }
        }

        return "";

    }

    return mgnCookie;

}));
