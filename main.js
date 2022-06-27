function showAlert(name){

    alert('Hello '+name);

}

function myColor(color){
 
    // Get Input value
    let myInputValue = $('#my-color-input').val();

    // Change Input to UPPERCASE
    let fixColorName = myInputValue.toUpperCase();

    // Apply Color value to HTML text.
    $('#my-color-id').text(fixColorName);

    console.log('my color is '+color);

    //console.log('my new color is '+fixColorName);
}

//showAlert('Red');
//myColor("red");
//myColor("Blue");
//myColor("Yellow");