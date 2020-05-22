# Password generator
## Homework assignment no. 3 as part of UofT's coding class

### 1. The task

The task was to create a web application that can be used to create secure passwords that match certain criteria.

![Screenshot of the homescreen](https://github.com/cestmarcel/uoft-password-generator/blob/master/assets/screenshots/homescreen.png)

### 2. User flow

By clicking the button "Generate password" on the homescreen, the user is presented with prompts for password criteria. 

![Screenshot of the choices](https://github.com/cestmarcel/uoft-password-generator/blob/master/assets/screenshots/choices.png)

The user can choose whether to include lowercase letters, uppercase letters, numeric characters, and/or special characters. The user can also choose the password length between 8 and 128 characters using a range slider. The chosen password length is being displayed to the user. Once all choices are made, the user clicks "Generate password" and the generated password is being displayed.

![Screenshot of the application](https://github.com/cestmarcel/uoft-password-generator/blob/master/assets/screenshots/expanded.png)

The user has to at least choose one of the four character options as this is required to generate a password. The user input is validated. If none of the options are chosen and the user clicks "Generate password", an error message is displayed notifying the user that they have to make a choice.

![Screenshot of the error message](https://github.com/cestmarcel/uoft-password-generator/blob/master/assets/screenshots/error.png)

### 3. Comments in code

For better accessiblity, the code in the core html, css, and javascript files is commented.

### 4. External APIs, Libraries, and Frameworks 

The only external library used for this project is Bootstrap (https://getbootstrap.com) to help with responsive elements and styles. The full Bootstrap documentation can be found under https://getbootstrap.com/docs/4.5/getting-started/introduction/

No other external APIs, Libraries, and Framworks have been used to develop this application. UofT provided a basic html file, a css file containing styling as well as a barebone Javascript file to work into.
