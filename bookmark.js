

console.log("done");

console.log(localStorage.getItem("bookmark"));

document.querySelector("button").addEventListener("click",saveBookmark);

function saveBookmark(){
var x=document.getElementById("bookmarksite").value;
var y=document.getElementById("url").value;

 var bookmark={
 	name:x,
 	url:y
 }



if(localStorage.getItem("bookmarks")==null){
	var bookmarks=[];

	bookmarks.push(bookmark);
	localStorage.setItem("bookmarks",JSON.stringify(bookmarks));

}
else{
	var z=JSON.parse(localStorage.getItem("bookmarks"));
	console.log(z);
	z.push(bookmark);

	z.forEach(function(){

		

	});

	localStorage.setItem("bookmarks",JSON.stringify(z));

}

}

