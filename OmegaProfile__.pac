var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8\u5207\u6362", {
    "+\u81ea\u52a8\u5207\u6362": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)demdex\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)yahoo\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)adsrvr\.org$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)branch\.io$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)baidu-int\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)githubapp\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)gvt1\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)a2z\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/^3\.133\.128\.32$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)camo\.githubusercontent\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)github\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)avatars\.githubusercontent\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)slatejs\.org$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)swiperjs\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)d33v4339jhl8k0\.cloudfront\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)craft\.do$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)cubiq\.org$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)huatian\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)bdstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)doomsday\.no$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)sharethis\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)mookie1\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)adform\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)ad-delivery\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)futurecdn\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)everesttech\.net$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)turn\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)imrworldwide\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)rlcdn\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)advertising\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)casalemedia\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)taboola\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)adnxs\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mozilla\.org$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)medium\.systems$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)xheldon\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)google\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)weiyunbeta-int\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)material-ui\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)carbonads\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+\u4ee3\u7406";
        if (/^baidu\.com$/.test(host)) return "DIRECT";
        if (/^baidu-int\.com$/.test(host)) return "DIRECT";
        return "+\u4ee3\u7406";
    },
    "+\u4ee3\u7406": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^baidu\.com$/.test(host) || /^baidu-int\.com$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:7890; SOCKS 127.0.0.1:7890";
    }
});