;(function (global, $){  //prevent pre javascript don't end with ; properly 

    //return a new function so we don't always use new keyowrd to use my function
    var Greetr = function (firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    //here put the variable that can only be access inside Greetr object (closure effect)
    //and these variable prevent changing by outside developer
    var supportedLangs = ['en','es'];

    var greetings = {
        en : 'Hello',
        es : 'Hola'
    };

    var formalGreetings = {
        en : 'Greetings',
        es : 'Saludos'
    };

    var logMessages = {
        en : 'Logged in',
        es : 'Inicio sesion'
    };

    //here put all the method
    Greetr.prototype = {

        fullName : function(){
            return this.firstName + ' ' + this.lastName;
        },

        validate : function(){
            if(supportedLangs.indexOf(this.language)=== -1){
                throw 'Invalid language';
            }

        },

        greeting : function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetinng : function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet :  function(formal) {
            var msg;

            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreetinng();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            //'this' refer to the calling object at execution time
            //make the method chainable
            return this;
        },

        log : function(){

            if (console) {
                console.log(logMessages[this.language] + ' : ' + this.fullName());
            }

            return this;
        },

        setLang : function(lang){
            //update object
            this.language = lang;

            this.validate();

            return this;
        },
        HTMLGreeting : function(selector, formal){
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreetinng();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function (firstName, lastName, language) {

        //prevent this point to global obj
        var self = this;

        //set up default variable to Greetr.init function contrutor
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    //set all Greetr.init prototype point to Greetr prototype
    Greetr.init.prototype = Greetr.prototype;

    //attach Greetr to window object
    global.Greetr = global.$G = Greetr;

}
(window,jQuery));
