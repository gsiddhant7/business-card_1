function play(){
    // Create anchor element.
    var a = document.createElement('a'); 
              
    // Create the text node for anchor element.
    var link = document.createTextNode("Commo baby touch me touch me touch me!!");
    
    // Append the text node to anchor element.
    a.appendChild(link); 
    
    // Set the title.
    a.title = "This is Link"; 
    
    // Set the href property.
    a.href = "https://youtu.be/ogFn6vmDs3M?si=ea3-ZvXpHZ_Iwwz5&t=19"; 
    
    // Set the target to open in new tab.
    a.target = "_blank";
    
    // Append the anchor element to the body.
    document.body.appendChild(a); 
}
