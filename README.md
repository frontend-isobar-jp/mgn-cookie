# mgn-cookie ( Don't Need jQuery )


Set/Get Cookie.

___

# Install

```
npm i mgn-cookie -S
```

## Or Download raw data
[↓ download "mgn-cookie.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-cookie/master/src/mgn-cookie.js)

___

# Import

```
import mgnCookie from 'mgn-cookie';
```

___

# Constructor

```
new mgnCookie();
```

___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:----------|
|SetCookie(<br>cookieName,<br>value,<br>expiredays<br>)|cookieName* [String] : Specify cookie name.<br>value* : Specify value.(ex: true, 0, "check", etc.)<br>expiredays [Number] : Specify effective days.<br><br>*:Required|Set Cookie.|
|GetCookie(<br>cookieName<br>)|Specify name of the cookie you want to get.|Get Cookie.|
___

# Sample code

```
let Cookie = new mgnCookie();

if( !Cookie.GetCookie( "browsed" ) ) {
    alert("はじめまして");
}

Cookie.SetCookie( "browsed", true );
```
