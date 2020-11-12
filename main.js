
var infoText = 'browser: ' + navigator.appName
    + '<br>cookies enabled: ' + navigator.cookieEnabled
    + '<br>platform: ' + navigator.platform
    + '<br>user-agent header: ' + navigator.userAgent
    + '<br>user-agent language:' + navigator.systemLanguage
    + '<br><br>Location: ' + window.location
    + '<br>href: ' + window.location.href
    + '<br><br>screen size: ' + screen.width + 'x' + screen.height;

info.innerHTML = infoText;

function setCookie(key, val, days) {
    var exp = new Date();
    exp.setDate(exp.getDate() + (days || 1));
    exp = exp.toUTCString();

    val = escape(val);
    document.cookie = key + '=' + val + ';expires=' + exp;
}

setCookie('name', 'Dan T. Nguyen');
