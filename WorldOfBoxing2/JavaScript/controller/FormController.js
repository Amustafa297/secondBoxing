/**
 * This code handles user inputs using FormData, a built-in 
 * JavaScript class that simplifies the process of constructing key/value pairs representing
 * form fields and their values.
 */


export class FormController {
    constructor(model, view, ) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener('submit', this.handleFormSubmit);
        

    }

    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
        this.error.validation(input.name, input.value);
    }

    handleFormSubmit = (event) => {
       event.preventDefault();
        this.model.persist();
    }
}