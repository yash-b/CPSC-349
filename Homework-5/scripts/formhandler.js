(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

  
    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
          }

          this.$formElement = $(selector);

          if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
          }
    }
    FormHandler.prototype.addInputHandler = function (fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
        var emailAddress = event.target.value;
        var message = '';
        if (fn(emailAddress)) {
          $(event.target).setCustomValidity('');
        } else {
          message = emailAddress + ' is not an authorized email address!'
          $(event.target).setCustomValidity(message);
        }
      });
    };    

    FormHandler.prototype.addInputHandler = function (fn) {
      console.log('Setting input handler for form');
      };
  
    App.FormHandler = FormHandler;
    window.App = App;
  
  })(window);   