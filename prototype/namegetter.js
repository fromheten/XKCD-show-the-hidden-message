var comicDiv = document.getElementById("comic");
var oldMarkup = comicDiv.innerHTML;
var img = comicDiv.getElementsByTagName("img")[0];
var text = img.title;
var newMarkup = oldMarkup + "<br/>" + text;
comicDiv.innerHTML = newMarkup;
