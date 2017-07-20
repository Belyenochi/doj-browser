
function dynamicLoad(url, callback) {
    if (!url.startsWith('//') && url.startsWith('/')) {
        url = STATIC_HOST + url
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    document.head.appendChild(script);
    script.onload = callback;
    script.src = url
}
