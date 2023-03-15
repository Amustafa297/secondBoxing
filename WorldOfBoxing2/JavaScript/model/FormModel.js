export class FormModel {
    constructor() {
        this.name = "";
        this.address="";
        this.init();
       
    }


    
/**
     * Initializes this object properties. New properties are added based on the
     * data loaded from  localStorage.
     * 
     * @returns {undefined}
     */

    init() {
        let glove = JSON.parse(localStorage.getItem('glove'));
        for (let property in glove) {
            this[property] = glove[property];
        }
    }
 /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but in this case, we would be dealing 
     * with an array of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        let inputsString = JSON.stringify(this);
        return JSON.parse(inputsString);
    }

    /**
     * Stores glove data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'glove'.
     * 
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('glove', JSON.stringify(this));
    }
}
