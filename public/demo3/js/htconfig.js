window.htconfig = {
    Default: {
        toolTipBackground: 'rgba(0,0,0,0.7)',
        toolTipLabelColor: 'rgb(51,153,255)',
        toolTipLabelFont: '18px arial, sans-serif',
        convertURL: function(url) {
            var storagePrefix = '';
            if (storagePrefix && url && !/^data:image/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '/' + url
            }
            // append timestamp
            url += (url.indexOf('?') >= 0 ? '&' : '?') + 'ts=' + Date.now();
            return url;
        }
    }
};
