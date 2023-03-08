import React from 'react'

const Validation = (inputs) => {

    let errors={};
    let c=0;

    if(inputs.sapid!=11)
    {
        errors.sapid= '*sap-id should be of 11 digits'
    }
    else
    {
        console.log("it matched");
    }
  
    let regex4=  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  let str4=inputs.password;
  if (regex4.test(str4)) {
    console.log("it matched");
  } else {
    errors.password = "*Password should have at least one Upper Case, one Digit and one Special Character";
    c++;
 
  }
  
    return errors;
}


export default Validation