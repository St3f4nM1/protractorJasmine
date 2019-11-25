/* global require,element,by,browser,console,exports,module */
// imports
require('./Login.pageObject.js'); // import next page used on return

let Login = function () {
    "use strict";
    // Locators
    // let emailField = element(by.xpath("//*[@formcontrolname='email']"));
    // let passwordField = element(by.css('[formcontrolname="password"]'));
    // let signInButton = element(by.css('.btn[type="submit"]'));


    let username = element(by.css("input[name=\"email\"]"));
    let password = element(by.xpath("//input[@name=\"pass\"]"));
    let loginButton = element(by.id("loginbutton"));
    let fbLogo = element(by.xpath("/html/body/div[1]/div[2]/div/div/div/div/div[1]/h1/a/i"));


    this.enterUsername = function (username) {
        username.sendKeys(username);
    };

    function enterPass(pass) {
        password.sendKeys(pass);
    }

    function clickLoginButton() {
        loginButton.click();
    }

    function logoExists() {
        fbLogo.isElementPresent();
    }


    // Methods
    this.enterEmail = function (email) {
        emailField.clear();
        emailField.sendKeys(email);
        // log email typed in email field
        emailField.getAttribute("value").then(function (readFieldValue) {
            console.log("Debug: Email typed in email login field = " + readFieldValue);
        });
        return this;
    };

    this.enterPassword = function (password) {
        passwordField.clear();
        passwordField.sendKeys(password);
        return this;
    };

    this.clickSignInButton = function () {
        signInButton.click();
        return require('./YourFeed.pageObject.js');
    };

};

module.exports = new Login();