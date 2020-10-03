/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

// function billingFunction, sets and clears fields in Billing Information
function billingFunction() {

    // checking if checked
    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }

    // else condition, if not checked
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}
