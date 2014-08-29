// Alarm in 10 seconds (relative)
function addAlarm0()
{
	var alarm = new tizen.AlarmRelative(10);
	tizen.alarm.add(alarm, "http://tizen.org/alarm-clock");
	console.log("Alarm0 added with id: " + alarm.id);
}
 

//Alarm on a given date / time
function addAlarm1()
{
	var alarm = new tizen.AlarmAbsolute(new Date(2012, 6, 14, 15, 56));
	//var service = new tizen.application.ApplicationService("http://tizen.org/appsvc/operation/view", "http://www.tizen.org");
	//tizen.alarm.add(alarm, "http://tizen.org/browser", service);
	tizen.alarm.add(alarm, "http://tizen.org/alarm-clock");
	console.log("Alarm1 added with id: " + alarm.id);
}



function alarmApiTest()
{
	addAlarm0();
	addAlarm1();
}