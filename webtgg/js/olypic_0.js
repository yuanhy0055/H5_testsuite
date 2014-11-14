/**
 * Created with JetBrains WebStorm.
 * User: nico
 * Date: 13-8-28
 * Time: 下午5:16
 * To change this template use File | Settings | File Templates.
 */

function find_factor(n) {
    var cnt = 0;
    var i;
    for(i=1;i<=n;i++) {
        if(n%i == 0) {
            cnt++;
            debug(i);
        }
    }

    debug('sum='+cnt);
}
