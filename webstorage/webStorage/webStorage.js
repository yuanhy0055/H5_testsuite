//sessionStorage
function saveStorage(id)
{
	var target = document.getElementById(id);
	var str = target.value;
	sessionStorage.setItem("message", str);
}
function loadStorage(id)
{
	var target = document.getElementById(id);
	var msg = sessionStorage.getItem("message");
	target.innerHTML = msg;
}

//localStorage

function saveStorage1(id)
{
	var target = document.getElementById(id);
	var str = target.value;
	localStorage.setItem("message1", str);
}
function loadStorage1(id)
{
	var target = document.getElementById(id);
	var msg = localStorage.getItem("message1");
	target.innerHTML = msg;
}