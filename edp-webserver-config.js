exports.port = 8846;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

var jsxMidlayer = require(__dirname + '/edp-midlayer-react');
var mockservice = require('mockservice');
mockservice.config({dir: './debug'});

// 导入配置
exports.getLocations = function () {
    return [
        {
            location: /\.jsx.js($|\?)/,
            handler: [
                file(),
                jsxMidlayer.compileHTML()
            ]
        },
        {
            location: /\/request.ajax/,
            handler: mockservice.request()
        },
        {
            location: /\/$/,
            handler: home( 'index.html' )
        },
        {
            location: /^\/redirect-local/,
            handler: redirect('redirect-target', false)
        },
        {
            location: /^\/redirect-remote/,
            handler: redirect('http://www.baidu.com', false)
        },
        {
            location: /^\/redirect-target/,
            handler: content('redirectd!')
        },
        {
            location: '/empty',
            handler: empty()
        },
        {
            location: /\.css($|\?)/,
            handler: [
                autoless()
            ]
        },
        {
            location: /\.less($|\?)/,
            handler: [
                file(),
                less()
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};