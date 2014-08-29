var calendar;

//getCalendars(CalendarType type, CalendarArraySuccessCallback successCallback, optional ErrorCallback? errorCallback);
function eventFoundCallback(events) {
    // The event has been successfully found
    // Let's try to change the summary
    events[0].summary = 'cy test'; 
    calendar.update(events[0]);
    console.log('First event was updated!');
}

// Define the error callback for all the asynchronous calls
function errorCallback(response) {
     console.log( 'The following error occurred: ' +  response.name);
}

// Define the success callback for retrieving the list of calendars
function calendarListCallback(calendars) {
     if(calendars.length > 0) {
       console.log("the calendar num is: " + calendars.length);
       calendar = calendars[0];
       console.log('The calendar id is: ' + calendar.id + ' and name is: ' + calendar.name);  

        var ev = new tizen.CalendarEvent({description:'cuiyan Test', 
                                         summary:'cuiyan Test', 
                                         startDate: new tizen.TZDate(2012, 6, 30, 10, 0), 
                                         duration: new tizen.TimeDuration(1, "HOURS"),
                                         location:'Huesca'});
        calendar.add(ev);

        // The event has been successfully added
        // Let's try to check if we can retrieve the added event from the calendar 
        // If the calendar was empty only the item added through addEvent should
        // be returned
        var filter = new tizen.AttributeFilter('summary', 'CONTAINS', 'cuiyan');
        calendar.find(eventFoundCallback, errorCallback, filter);
     }else{
    	 console.log("there is no calendar in the device!!!!");
     }
}

function getCalendarTest()
{
	// Get a list of available calendars.
	tizen.calendar.getCalendars("EVENT", calendarListCallback, errorCallback);

}

   
 









function calendarApiTest()
{
	getCalendarTest();
}