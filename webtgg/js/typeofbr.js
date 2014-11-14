/**
 * Created with JetBrains WebStorm.
 * User: nico
 * Date: 13-8-29
 * Time: 上午10:24
 * To change this template use File | Settings | File Templates.
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    //debug(browserName);
    if(/msie/i.test(browserName) && !/opera/.test(browserName)) {
        //debug("IE");
        return 0;
    } else if(/firefox/i.test(browserName)) {
        //debug("Firefox");
        return 1;
    } else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        //debug("Chrome");
        return 2;
    } else if(/opera/i.test(browserName)) {
        //debug("Opera");
        return 3;
    } else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        //debug("Safari");
        return 4;
    } else {
        //debug("unKnown");
        return 999;
    }
}