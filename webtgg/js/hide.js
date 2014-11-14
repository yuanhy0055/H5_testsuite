/**
 * Created with JetBrains WebStorm.
 * User: nico
 * Date: 13-8-28
 * Time: 下午5:54
 * To change this template use File | Settings | File Templates.
 */

function hide(e, reflow) {
    if (reflow) {
        e.style.display = "none";
    } else {
        e.style.visibility = "hidden";
    }
}

function highlight(e) {
    if (!e.className)
        e.className = "hilite";
    else
        e.className += "hilite";
}
