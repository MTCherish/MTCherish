

function ajaxGet(url, fun) {
    //第一步创建 XMLHttpRequest 对象
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 第二部向服务器发送请求
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    // 接受回调数据
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj.userName);
            fun(obj)
        }
    }
}

function ajaxPost(url,data,fun){
    //第一步创建 XMLHttpRequest 对象
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        // 第二部向服务器发送请求
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("levelname="+data.levelname);

        // 接受回调数据
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText)
                fun(obj)
            }
        }
}
