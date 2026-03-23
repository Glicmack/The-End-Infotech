//*=====================
//*  FORM ELEMENTS     =
//*=====================
document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Helper function to find closest parent with class
    function closest(element, selector) {
        while (element && element !== document) {
            if (element.matches && element.matches(selector)) {
                return element;
            }
            element = element.parentElement;
        }
        return null;
    }

    // Prevent clicks on disabled elements
    document.addEventListener('click', function (e) {
        if (e.target && e.target.matches && e.target.matches('[disabled], .disabled')) {
            e.preventDefault();
        }
    });

    // Focus events
    document.addEventListener('focus', function (e) {
        if (e.target && e.target.matches && e.target.matches('.input-field .input, .input-button-wrap .input')) {
            const inputField = closest(e.target, '.input-field');
            if (inputField) {
                inputField.classList.add('focus');
            }
        }
    }, true);

    // Blur events
    document.addEventListener('blur', function (e) {
        if (e.target && e.target.matches && e.target.matches('.input-field .input, .input-button-wrap .input')) {
            const inputField = closest(e.target, '.input-field');
            if (inputField) {
                inputField.classList.remove('focus');
            }
        }
    }, true);

    // Keyup events for input value
    document.addEventListener('keyup', function (e) {
        if (e.target && e.target.matches && e.target.matches('.input-field .input')) {
            const inputField = closest(e.target, '.input-field');
            if (inputField) {
                if (e.target.value) {
                    inputField.classList.add('value');
                } else {
                    inputField.classList.remove('value');
                }
            }
        }
    });

    // Invalid Input validation
    document.addEventListener('blur', function (e) {
        if (e.target && e.target.matches && e.target.matches('.input-field .input[required]')) {
            const inputField = closest(e.target, '.input-field');
            if (inputField) {
                if (e.target.value.trim()) {
                    inputField.classList.remove('invalid');
                } else {
                    inputField.classList.add('invalid');
                }
            }
        }
    }, true);

    // Check if input has value or autofill on page load
    function checkInputValues() {
        const inputs = document.querySelectorAll('.input-field .input');
        inputs.forEach(function (input) {
            const inputField = closest(input, '.input-field');
            if (inputField && input.value) {
                inputField.classList.add('value');
            }
        });

        // Check for autofilled inputs
        const autofilledInputs = document.querySelectorAll('.input-field .input:-webkit-autofill');
        autofilledInputs.forEach(function (input) {
            const inputField = closest(input, '.input-field');
            if (inputField) {
                inputField.classList.add('value');
            }
        });
    }

    // Run check on page load
    checkInputValues();

    window._functions = window._functions || {};
    _functions.validateEmail = function (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    document.addEventListener('keyup', function (e) {
        if (e.target && e.target.matches && e.target.matches('input[type="email"]')) {
            const email = e.target;
            const inputField = closest(email, '.input-field');

            if (inputField) {
                if (email.value === '') {
                    inputField.classList.remove('invalid-email');
                } else if (!_functions.validateEmail(email.value)) {
                    inputField.classList.add('invalid-email');
                } else {
                    inputField.classList.remove('invalid-email');
                }
            }
        }
    });

    document.addEventListener('input', function (e) {
        if (e.target && e.target.matches && e.target.matches('input[type="tel"]')) {
            const phoneInput = e.target;
            let value = phoneInput.value;
            
            const allowedChars = /[^0-9\s\(\)\-\+]/g;
            let cleanValue = value.replace(allowedChars, '');
 
            if (cleanValue !== value) {
                phoneInput.value = cleanValue;
                
                const cursorPos = cleanValue.length;
                setTimeout(() => {
                    phoneInput.setSelectionRange(cursorPos, cursorPos);
                }, 0);
            }
        }
    });



    document.addEventListener('submit', function(e) {
        if (e.target.matches('.form-block')) {
            e.preventDefault();
            e.stopPropagation();
            
            const form = e.target;
            let isValid = true;
            
            const firstName = form.querySelector('input[name="first_name"]');
            const phone = form.querySelector('input[name="phone"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            
        
            
            if (isValid) {
                const formData = new FormData(form);
                
                fetch('/send-mail.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    console.log('Лист відправлено:', data);
                    form.reset();
                    
                    if (typeof _functions !== 'undefined' && _functions.openPopup) {
                        console.log('qqq');
                        _functions.openPopupAfterLoad('thanks');
                    }
                })
                .catch(err => {
                    console.error('Помилка:', err);
                    alert('Помилка відправки. Спробуйте ще раз.');
                });
            }
            
            return false;
        }
    });
});

