import {selectData} from '../store/selectData.js';

/**
 * This code represents the application model,
 *  which contains information about the glove, such as its size,type and color. The model can get this information from either
 *  a database or files, which may be located locally or externally.
 *  The class also includes a reference to an external file that contains data for select options.
 *  However, the model does not communicate directly with a view - instead, it is accessed by a controller when needed.
 */
export class model {
static store =selectData; //external resource
    

/**
 * Creates an object that represents the model and  @returns {model}
 */
constructor(){
        this.size = "undefined";
        this.type = "undefined";
        this.color = "undefined";
    }


/**
 * This method returns an array of property names for this object. The View then uses this array to
 * dynamically render the corresponding select elements. Essentially, 
 * a select element is rendered in the View for each property in the Model.
 * @returns {Array} array of property names (strings)
 */
    getProperties(){
        return Object.keys(this);
    }

    /**
     *  Gets the data from the external resource to be used as select options.
     * @param {String} selectID -select ID
     * @returns {Array} array of select options (strings)
     */
getOptions(selectID){
        let options;
        switch(selectID){
            case 'size':
                options = Object.keys(model.store);
                break;
            case 'type':
                options = Object.keys(model.store[this.size]);
                break;
            case 'color':
                options = Object.keys(model.store[this.size][this.type]);
                break;
        }
        return options;
    }

/**
 * Resets this object's properties to "undefined". Not all properties are
 * going to be reset, only those that are listed after the property defined 
 * by this method parameter. 
 * @param {type} property - property from which the reset starts
 */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }
    }
/**
 * This code uses Window.localStorage to store the glove data as a JSON string under the key "glove", allowing the
 * data to persist across browser sessions.
 * @returns {undefined}
 */
    persist(){
        localStorage.setItem('glove', JSON.stringify(this));
    }
}