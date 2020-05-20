function plus_second() {
    alert("长者已经收到你的贡献！");
}
function switchFilter() {
    document.getElementById('overlay').classList.toggle('backdrop-filter');
}
function Open(boxID, fadeID) {
    document.getElementById(boxID).style.display = 'inline-block';
    document.getElementById(fadeID).style.display = 'inline-block';
}
function Close(boxID, fadeID) {
    document.getElementById(boxID).style.display = 'none';
    document.getElementById(fadeID).style.display = 'none';
}
function OpenNASByMethod(method, key) {
    var a = document.getElementById('keyinput');
    var _reg = /^[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if (!key.match(_reg)) {
        var regex = /^[A-Za-z0-9]{5}[\\-][A-Za-z0-9]{5}[\\-][A-Za-z0-9]{5}[\\-][A-Za-z0-9]{5}[\\-][A-Za-z0-9]{5}/;
        if (key == "") {
            alert("密钥不能为空（005）");
        }
        else if (!key.match(regex)) {
            alert("非正确输入格式（004）");
        }
        else if (key == "VK7JG-NPHTM-C97JM-9MPGT-3V66T" && key.match(regex)) {
            switch (method) {
                case 0:
                    window.location = "https://192.168.1.94:61112/";
                    break;
                case 1:
                    window.location = "https://czhp7512.quickconnect.to/";
                    break;
                default:
                    alert("参数传入不正确（001）");
                    break;
            }
        }
        else {
            alert("密钥输入错误（002）");
        }
    }
    else {
        alert("输入密钥含有非法字符（003）");
        a.value = "";
    }
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
} 

var num = 0;

function switchBackground() {
    var imglist = new Array(3);
    imglist[0] = "/web_images/bg.png";
    imglist[1] = "/web_images/001.jpg";
    imglist[2] = "/web_images/fripside.jpg";
    document.getElementById('body').style.background = "url('" + imglist[num] + "') no-repeat center center fixed";
    document.getElementById('body').style.backgroundSize = "cover";
    num++;
    if (num == imglist.length) {
        num = 0;
    }
}