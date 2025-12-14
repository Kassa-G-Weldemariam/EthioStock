// get the current pages full url
let currentPageUrl=window.location.href;
// get all the navigation links
let navlinks=document.getElementById("navlink").getElementsByTagName("a");
// loop through the links and add the active class if the url matches
for(let i=0; i<navlinks.length; i++){
    if(navlinks[i].href==currentPageUrl){
        navlinks[i].classList.add("active");
    }
}