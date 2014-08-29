/**
 * Created with JetBrains WebStorm.
 * User: longxiuping
 * Date: 12-7-6
 * Time: 下午2:35
 * To change this template use File | Settings | File Templates.
 */
function Network(lowNetworkSrc, highNetworkSrc, networkWidth, networkHeight)
{
    this.networkHeight = networkHeight;
    this.networkWidth = networkWidth;

    this.lowNetworkElement = null;
    this.domElement = null;

    this.networkConnected = false;

    this.init(lowNetworkSrc, highNetworkSrc);
}


Network.prototype.init = function(lowNetworkSrc, highNetworkSrc)
{
    var el = document.createElement('div');

    var fullImage = document.createElement('img');
    fullImage.style.position = 'absolute';
    fullImage.src = highNetworkSrc;

    this.lowNetworkElement = document.createElement('div');
    this.lowNetworkElement.style.position = 'absolute';
    this.lowNetworkElement.style.overflow = 'hidden';
    this.lowNetworkElement.style.width = this.networkWidth + 'px';
    this.lowNetworkElement.style.height = '0px';

    var emptyImage = document.createElement('img');
    emptyImage.src = lowNetworkSrc;

    this.lowNetworkElement.appendChild(emptyImage);

    el.appendChild(fullImage);
    el.appendChild(this.lowNetworkElement);

    this.domElement = el;
}

/**
 * Updates network with the given value (0 - 100 range)
 * @param {Number} value
 */
Network.prototype.updateNetwork = function(value)
{
    if(value == undefined || value < 0)
        value = 0;

    if(!this.networkConnected)
        this.networkValue = value;

    var height = Math.round(((100 - value) * this.networkHeight) / 100);

    console.log("height:" + height)
    this.lowNetworkElement.style.height = height + 'px';
}