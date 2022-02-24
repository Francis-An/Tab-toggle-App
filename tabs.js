function openCity(evt,cityName){
    //Declare all variables
    let i, tabcontent,tablinks;
    
    //Get all elements with class name "tabcontent" and remove them
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //Get all elements with class name "tablinks" and remove the "active" class
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show 
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}
//Default open
document.getElementById('default').click();

function hello () {
    let message = "Hello world by me";
}