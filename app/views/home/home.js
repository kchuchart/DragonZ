const frameModule = require("ui/frame");

exports.goAbout = ()=> {
    let topmost = frameModule.topmost();
    topmost.navigate("views/about/about");
}