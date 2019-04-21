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
        let assets = map.assets;
        for (let i = 0; i < assets.length; ++i) {
            let asset = assets[i];
            let os;
            if (asset.name.endsWith('-x32.exe')) {
                os = 'win32';
            }
            else if (asset.name.endsWith('-x64.exe')) {
                os = 'win64';
            }
            else if (asset.name.endsWith('.dmg')) {
                os = 'macos';
            }
            else if (asset.name.endsWith('.tar.gz')) {
                os = 'linux';
            }

            if (os) {
                let el = document.querySelector('header a.btn[os="' + os + '"]');
                el.setAttribute('tooltip', id);
            }
        }
    }
}
