// Add tooltip  element on page
// Tooltip will be showed when user (or bot) move mouse under element with dmtooltip attribute
function initToolTip()
{
    let body = document.querySelector('body');
    if (!body) {
        return;
    }

    let tooltip = document.querySelector('#tooltip');
    if (!tooltip) {
        tooltip = document.createElement('span');
        tooltip.setAttribute('style', `
pointer-events: none;
display: block;
background-color: black;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 5px 0;
pading; 10px 10px 10px 10px;

/* Position the tooltip */
position: absolute;
z-index: 1000;
`);
        tooltip.id = 'tooltip';
        body.appendChild(tooltip);
    }

    body.removeEventListener('mousemove', this.updateToolTip);
    body.addEventListener('mousemove', this.updateToolTip);
}

// Internal function to actually show or hide tooltip
// Must not be used at user code
function updateToolTip(event)
{
    let tooltip = document.querySelector('#tooltip');
    if (!tooltip) {
        return;
    }

    let el = event ? event.target : null;
    if (el) {
        let text = el.getAttribute('tooltip');
        text = text ? text : ''; // ensure String
        text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
        text = text.replace(/ /g, '&nbsp;');
        tooltip.innerHTML = text;
    }
    else {
        tooltip.innerHTML = '';
    }


    if (tooltip.innerHTML) {
        tooltip.style.display = 'block';
        let rect = el.getBoundingClientRect();
        tooltip.style.top = rect.bottom + 'px';
        tooltip.style.left = rect.left + 'px';
        let right = Number(tooltip.style.left).toInt() + Number(window.getComputedStyle(tooltip, null).getPropertyValue("width")).toInt();
        if (right > window.pageXOffset + window.innerWidth) {
            tooltip.style.left = Number(tooltip.style.left).toInt() - (right - (window.pageXOffset + window.innerWidth)) + 'px';
        }

        let bottom = Number(tooltip.style.top).toInt() + Number(window.getComputedStyle(tooltip, null).getPropertyValue("height")).toInt();
        if (bottom > window.pageYOffset + window.innerHeight) {
            tooltip.style.top = rect.top - Number(window.getComputedStyle(tooltip, null).getPropertyValue("height")).toInt() + 'px';
        }
    }
    else {
        tooltip.style.display = 'none';
    }
}


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function onloadfunc()
{
    initToolTip();
    
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
                let btnEl = document.querySelector('header a.btn[os="' + os + '"]');
                btnEl.setAttribute('href', asset.browser_download_url);

                let tooltip = 'Size ' + Number((asset.size / (1024 * 1024))).toFixed(2) + ' MiB<br>Download count '  + asset.download_count;
                btnEl.setAttribute('tooltip', tooltip);

                let imgEl = document.querySelector('header a.btn[os="' + os + '"] img');
                imgEl.setAttribute('tooltip', tooltip);
            }
        }
    }
}
