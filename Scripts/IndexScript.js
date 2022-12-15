// get html elements from document
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// add and removes tabs
function opentab(tabname){

    // removes underline from tab
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    // removes contents from tab
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    // adds contents and underline to tabs on click
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
