var eejs = require('ep_etherpad-lite/node/eejs/');
// Add client code
exports.eejsBlock_scripts = function (hook_name, args, cb) {
    args.content = args.content + '<script type="text/javascript">var nav_script = document.createElement("script");nav_script.type = "text/javascript";nav_script.src="/nav/nav.js";document.getElementsByTagName("head"    )[0].appendChild(nav_script);</script>';
}
