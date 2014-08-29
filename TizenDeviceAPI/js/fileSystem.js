
function createFileTest()
{
	var documentsDir;
	
	function onsuccess(files) {
	   for(var i = 0; i < files.length; i++) {
	     console.log("File Name is " + files[i].name); // displays file name
	   }

	   var testFile = documentsDir.createFile("test1.txt");

	   if (testFile != null) {
	     testFile.openStream(
	       "w",
	       function(fs){
	         fs.write("HelloWorld");
	         fs.close();
	       }, function(e){
	         console.log("Error " + e.message);
	       }, "UTF-8"
	     );
	   }
	}
	function onerror(error) {
	   console.log("The error " + error.message + " occurred when listing the files in the selected folder");
	}
	
	tizen.filesystem.resolve('documents', function(dir){
	     documentsDir = dir;
	     dir.listFiles(onsuccess,onerror);
	   }, function(e){
	     console.log("Error" + e.message);
	   }, "rw"
	 );
}

 
 
function fileSystemApiTest()
{
	createFileTest();
}


