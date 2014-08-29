//find: Fetches call history items.
// Define success callback
function onSuccess(results) {
     console.log(results.length + " call history item(s) found!");
     for (var i=0; i<results.length; i++) {
         console.log(i + ". " + results[i].toString()); // process the CallHistoryEntry
     }
}

// Define error callback
function onError(error) {
     console.log("Query failed:" + error.name);
}
function findHistroy()
{
	// Define filter: list CS calls, most recent first
	var filter = new tizen.AttributeFilter("callType", "EXACTLY", "tizen.tel");
	// Define sort mode: descending on call start time.
	var sortMode = new tizen.SortMode("startTime", "DESC");
	// Make the query and wire up the callbacks
	console.log("===first find...===");
	tizen.call.history.find(onSuccess, onError, filter, sortMode);

	var numberfilter = new tizen.AttributeFilter("remoteParties.remoteParty", "EXACTLY", "123456789");                   
	// create a composite filter for time constraints
	var y2011Filter = new tizen.AttributeRangeFilter("startTime", new Date(2011, 0, 1),new Date(2012, 0, 1));
	var y2012Filter = new tizen.AttributeRangeFilter("startTime", new Date(2012, 0, 1), new Date(2013, 0, 1));
	var datefilter = new tizen.CompositeFilter("UNION", [y2011Filter, y2012Filter]);
	// create filter to find all video calls (including cellular, skype, etc)
	// the filter matches exactly any tags from the "tags" array
	var tfilter = new tizen.AttributeFilter("tags", "EXACTLY", "call.video");
	// create composite filter
	var ifilter = new tizen.CompositeFilter("INTERSECTION", [numberfilter, datefilter, tfilter]);

	 // Make the query and wire up the callbacks; reuse sortMode
	console.log("===second find...===");
	 tizen.call.history.find(onSuccess, onError, ifilter, sortMode);
}







function callApiTest()
{
	findHistroy();
}