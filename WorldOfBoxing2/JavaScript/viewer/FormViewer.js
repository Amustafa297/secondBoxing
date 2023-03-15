export class FormViewer {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-glove');
    }

   
      /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - an objcet that is feeding this new form from the other form information that was selected
     * @returns {values}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend',
                    `<p>${property}
                        <input class="options" name='${property}' 
                               value='${dataObject[property]}' 
                               type='text' size='50' />
                     </p>`);
        }
        this.inputs = this.form.querySelectorAll('input[type=text]');
    }
}