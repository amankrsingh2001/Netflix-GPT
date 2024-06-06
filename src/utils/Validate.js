export const checkValidData = (email,password,name='salman') =>{
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^([a-zA-Z0-9_\s]+)$/.test(name)
   
   

    if(!isEmailvalid || !isPasswordValid  || !isNameValid || !isNameValid){
        return "Username or Password is not valid"
    }
    return null
}

    