
//launch 
function onsuccess() {
    console.log("===launch===" + "The application has launched successfully");
}
function onerror() {
    console.log("===launch===" + "The application launched has failed");
}
function launchTest()
{
	tizen.application.launch("/opt/apps/org.tizen.browser/bin/browser", onsuccess, onerror);
}

//kill
function onKillSuccess() {
    console.log("===kill===" + "Application terminated successfully");
}
function onKillFail() {
    console.log("===kill===" + "Application terminated failed");
}
function onRunningAppsContext(contexts) {
   if (contexts.length > 0) {
	   for(var i=0; i<contexts.length; i++){
		   console.log("===kill===" + "the app's contextId is:" + contexts[0].id);
		   tizen.application.kill(contexts[0].id, onKillSuccess, onKillFail);
	   }	   
    }
}
function killTest()
{
	tizen.application.getAppsContext(onRunningAppsContext);
}

//launchService
var service = new tizen.ApplicationService(
	    "/opt/apps/org.tizen.browser/bin/browser",
	    null,
	    "image/jpg",
	    null);
var serviceReplyCallback = {
	    // callee sent a reply 
	    onsuccess: function(reply) {
	       for(var num=0; num < reply.data.length; num++) {
	           console.log("reply.data["+num+"].key = "+ reply.data[num].key);
	           console.log("reply.data["+num+"].value = "+ reply.data[num].value);  
	       }
	    },
	    // Something went wrong
	    onfail: function() {
	       console.log("===launchService===" + 'The launch service failed');
	    }
};
function launchServiceTest()
{
	tizen.application.launchService(service, null,
			  function() {
				 console.log("===launchService===" + "launch service succeed"); 
			  },
			  function(e) {
				  console.log("===launchService===" + "launch service failed. reason: " + e.message); 
			  },
			  serviceReplyCallback );
}

	 










function applicationApiTest()
{
	launchTest();
	killTest();
	launchServiceTest();
}