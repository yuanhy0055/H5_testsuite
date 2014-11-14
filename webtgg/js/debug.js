/**
 * Created with JetBrains WebStorm.
 * User: nico
 * Date: 13-8-28
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */

function debug(msg) {
    var log = document.getElementById("debuglog");

    if(!log) {
        log = document.createElement("div");
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }

    var pre = document.createElement("div");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}