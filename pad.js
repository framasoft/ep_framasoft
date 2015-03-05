var eejs = require('ep_etherpad-lite/node/eejs/');
// Add client code
exports.eejsBlock_htmlHead = function (hook_name, args, cb) {
    args.content = args.content + '<script src="../static/plugins/ep_framasoft/static/nav/nav.js"></script>';
}
