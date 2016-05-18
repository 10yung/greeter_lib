#Greeter_Lib practice
------
##practice javascript Lib like coding pattern and build a simple greeting package

###Learning Path

This side practice tries to imitate jQuery coding pattern and build my own Javascript Library.

Here just put the Greeting package prototype and in this practice I've learned some skills below.

* **Javascript Immediately Invoked Function & Closure**

   I wrapped my whole javascript code in an Immediately Invoked Function and attach to window object (all in Greetr.js file), so that my Lib package cannot be changed from the outer environment. And the variables I set inside my function are protected from erasing (closure feature).

* **jQuery like coding pattern and jQuery way to use**

   In this Greetr Lib, I imitate jQuery so that I can use jQuery way ``g.greet().setLang('es').greet(true)`` and chain all methods together. I also use Greetr.init to initialize object with default variables and ``return new Greetr.init(var, var, var)`` so that I don't have to new an object everytime I use my Lib function. 
