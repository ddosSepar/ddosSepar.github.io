self.onmessage = function(e) {
  sendPacket(e.data.url, e.data.userAgent, self.postMessage);
};

function sendPacket(url, userAgent, callback)
{
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    
    // TODO: investigate about setting user agent
    // request.setRequestHeader("User-Agent", userAgent);


    request.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            callback('[INFO] SENT Packet');
            sendPacket(url);
        }
        else
        {
            callback('[ERROR] Failed Packet to ' + url);
        }
    }
    request.send();
}
