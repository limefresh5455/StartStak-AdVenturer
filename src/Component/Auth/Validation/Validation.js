

export const signUpValidation = (userDetails) => {
    let errors = {};
  
    const { name, email , password, number } = userDetails;
  
 
    if (!name) { 
      errors.name = '*Name is required.'; 
    }
  
    // Validate email field 
    if (!email) { 
      errors.email = '*Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = '*Email is invalid.'; 
    }
  
    // Validate number field
    if (!number) {
        errors.number = '*Mobile number is required.';
      }else if (!/^\d{10}$/.test(userDetails.number)) {
        errors.number = '*Mobile number is invalid. Please enter a 10-digit number.';
      }
  
    // Validate password field 
    if (!password) { 
      errors.password = '*Password is required.'; 
    } else if (password.length < 8) { 
      errors.password = '*Password must be at least 8 characters.'; 
    }
  
    // Validate confirmPassword password field 
    // if (!confirmPassword) { 
    //   errors.confirmPassword = '*confirmPassword password is required.'; 
    // } else if (confirmPassword !== password) { 
    //   errors.confirmPassword = '*Passwords do not match.'; 
    // }
    return errors;
  };
  


  export const signInValidation = (userDetails) => {
    let errors = {};
  
    const {  email ,password } = userDetails;
  
    // Validate email field 
    if (!email) { 
      errors.email = '*Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = '*Email is invalid.'; 
    }

    // Validate password field 
    if (!password) { 
      errors.password = '*Password is required.'; 
    } else if (password.length < 8) { 
      errors.password = '*Password must be at least 8 characters.'; 
    }
    return errors;
  };
 


  export const FotgotPasswordValidation = (userDetails) => {
    let errors = {};
  
    const {  email   } = userDetails;
  
    // Validate email field 
    if (!email) { 
      errors.email = '*Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = '*Email is invalid.'; 
    }
    
    return errors;
  };

  export const ResetPasswordValidation = (userDetails) => {
    let errors = {};
  
    const {  password,confirmPassword   } = userDetails;

    // Validate password field 
    if (!password) { 
      errors.password = '*Password is required.'; 
    } else if (password.length < 8) { 
      errors.password = '*Password must be at least 8 characters.'; 
    }
      // Validate confirm password field
    if (!confirmPassword) {
      errors.confirmPassword = '*Confirm password is required.';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = '*Passwords do not match.';
    }
      
    return errors;
  };





