module.exports = {

    dataId : {

        //register proccess
        asdzzz : '1234',
        textSignupLogin :  ' Signup / Login',
        textSignup : 'New User Signup!',
        inputNameSignup : 'try',
        inputEmailSignup : 'asdzzz@asdzzz.com',
        textTitleFormSignup : 'Enter Account Information',
        inputPassword : '1234',
        inputDay : '12',
        inputMonth : 'April',
        inputYear : '1990',
        inputFirstName : 'trial',
        inputLastName : 'errorz',
        inputCompany : 'excercise inc',
        inputAddress1 : 'this is address value',
        inputCountry : 'Singapore',
        inputState : 'usd',
        inputCity : 'batavia',
        inputZipCode : '1234567',
        inputMobileNumber : '0876547890',
        textAccountCreated : 'Account Created!',
        verifUsernameText : ' Logged in as ',
        textAccountDeleted : 'Account Deleted!',

        //login logout proccess
        textLogin : 'Login to your account',
        invalidEmail : 'invalid@email.com',
        textFailedLoginWarning : 'Your email or password is incorrect!',
        textLogout : ' Logout'

        
    },

    locatorId : {

        //register proccess
        linkTextSignupLogin : '.shop-menu > .nav > :nth-child(4) > a',
        titleFormSignUp : '.signup-form > h2',
        fieldName : '[type="text"]',
        fieldEmail : '.signup-form > form > [type="email"]',
        buttonSignup : '.signup-form > form > .btn',
        titleAccountInformation : ':nth-child(1) > b',
        genderFemale : '#id_gender2',
        textFieldPassword : '#password',
        dobDay : '#days',
        dobMonth : '#months',
        dobYear : '#years',
        firstName : '#first_name',
        lastName : '#last_name',
        company : '#company',
        address1 : '#address1',
        country : '#country',
        state : '#state',
        city : '#city',
        zipCode : '#zipcode',
        mobileNumber : '#mobile_number',
        createButton : '.login-form > form > .btn',
        verifText : 'b',
        buttonContinue : '.pull-right > .btn',
        verifUsername : ':nth-child(10) > a',
        linkTextDelete : '.shop-menu > .nav > :nth-child(5) > a',
        waitImageLoaded : 'a > data-product-id="43"',

        //login logout procces
        verifTextLogin : '.login-form > h2',
        fieldEmailLogin : '.login-form > form > [type="email"]',
        fieldPasswordLogin : '[type="password"]',
        loginButton : '.login-form > form > .btn',
        failedLoginWarning : '.login-form > form > p',
        linkTextLogout : '.shop-menu > .nav > :nth-child(4) > a'

    }
}