// access adapter name
var adapter = tizen.bluetooth.getDefaultAdapter();

function changeName(newName) 
{  
     if(adapter.name != newName) {
          // initiate change name
          adapter.setName(newName, function() {
              console.log("Adapter name changed to " + adapter.name);
          },
          function(e) {
              console.log("Failed to change name: " + e.message);
          });
     }
}
function powerOn() 
{
     // if not powered on
     if(!adapter.powered) {
          // initiate power on
          adapter.setPowered(true, function() {
              console.log("Bluetooth powered on success.");
          },
          function(e) {
              console.log("Failed to power on Bluetooth: " + e.message);
          });
     }
}
function powerOff()
{
     // if powered on
     if(adapter.powered) {
          // initiate power off
          adapter.setPowered(false, function() {
              console.log("Bluetooth powered off successfully.");
          },
          function(e) {
              console.log("Failed to power off Bluetooth: " + e.message);
          });
     }
}
function showMe()
{
     if (adapter.visible == false) {
         //Show device
         adapter.setVisible(true, 
                            function() { console.log ('Device is visible to other devices for 3 minutes.'); },
                            function(e) { console.log ('Error: ' + e.message + '(' + e.name + ')'); });
     }
     else {
          console.log("Device is already in discoverable mode.");
     }
}
function hideMe() 
{
    if (adapter.visible) {
         // Hide device
         adapter.setVisible(false,
                            function() { console.log('Device is in-visible now.'); },
                            function(e) { console.log ('Error: ' + e.message + '(' + e.name + ')'); });
    }
    else {
         console.log("Device is already in invisible mode.");
    }
}
function startDiscovery() 
{

	  var discoverDevicesSuccessCallback = {
	      onstarted: function() { 
	          console.log ("Device discovery started...");
	      },
	      ondevicefound: function(device) { 
	          console.log("Found device - name: " + device.name + ", Address: "+ device.address); 
	      },
	      ondevicedisappeared: function(address) { 
	          console.log("Device disappeared: " + address); 
	      },
	      onfinished: function(devices) { 
	          var message = new String("Found Devices:\n");
	          for (var i=0; i<devices.length; i++) {
	              message += " Name: " + devices[i].name + ", Address: " + devices[i].address + "\n" ;
	          }
	          message += "Total: " + devices.length;
	          console.log (message);
	      }
	  };
	 
	  // start searching for nearby devices, for about 10 sec.
	  adapter.discoverDevices(discoverDevicesSuccessCallback, function(e){
	      console.log ("Failed to search devices: " + e.message + "(" + e.name + ")");
	  });
}

function adapterTest()
{
	 console.log("Bluetooth state: " + adapter.powered ? "On" : "Off");
	 console.log ("Bluetooth adapter name: <b>" + adapter.name + "</b>");
	 console.log("Bluetooth device address: <b>" + adapter.address + "</b>");
	 console.log ("Bluetooth Visibility: " + adapter.visible ? "On" : "Off");
	 
	 changeName("cyDevice");
	 powerOn();
	 powerOff();
	 showMe();
	 hideMe();
	 startDiscovery();
}






function bluetoothApiTest()
{
	adapterTest();
}