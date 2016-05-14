(function (global, $){

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

    //here put all the method
    Greetr.prototype = {


    };

    Greetr.init = function (firstName, lastName, language) {

        //prevent this point to global obj
        var self = this;

        //set up default variable to Greetr.init function contrutor
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    //set all Greetr.init prototype point to Greetr prototype
    Greetr.init.prototype = Greetr.prototype;

    //attach Greetr to window object
    global.Greetr = global.$G = Greetr;

}
(window,jQuery));
