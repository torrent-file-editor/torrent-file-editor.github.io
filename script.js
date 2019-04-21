function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function onloadfunc()
{
    let map = JSON.parse(httpGet('https://api.github.com/repos/torrent-file-editor/torrent-file-editor/releases/latest'));

    if (map) {
        let el = document.querySelector('header a.btn');
        el.setAttribute('tooltip', map.url);
    }
}
