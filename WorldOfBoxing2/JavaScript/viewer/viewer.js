
/**
 * This is a class that shows the user information from the model,
 * like its type and color. It doesn't get the information directly from the model, though - instead, 
 * it relies on the controller to tell it what to display and when.
 * 
 * In addition, the view keeps track of all the user interface elements that
 * the user interacts with and for which the code needs to handle events.
 */


export class viewer {
    constructor() {
        this.gloveForm = document.querySelector("#glove-form");
        this.gloveDiv = document.querySelector("#div-select");
        this.select = null;
        this.gloveImage = document.querySelector("#div-glove");
    }


/**
 * This is a validator function which goes through all the selects of the form and checks if there is an undefined value
 * if there is it will disable the button and will not give you an option tu press it until the selects are selected
 */
    validator() {
        const button = document.getElementById('submitBTN');
        let disabled = false;
        for (let i = 0; i < this.select.length; i++) {
            const selects = this.select[i];
            if (selects.value === 'undefined') {
                disabled = true;
                button.style.opacity = 0.5;
                break;
            }
            else {
                button.style.opacity = 1;
                button.disabled = disabled;
            }
        }


    }
/**
 * This code renders HTML select elements without loading the options during the rendering process. 
 * As a result, there are no Option elements included in the select element.
 * @param {Array} selectIDs - this is an array of strings or in other words select IDs
 */
    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);

            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined'));
            this.gloveDiv.appendChild(select);
        });

        this.select = this.gloveDiv.querySelectorAll('select');
    }
/**
 * This method resets all of the sibling select elements to the one defined as a parameter.
 * @param {type} selectID 
 */
    resetNextSiblings(selectID) {
        let select = this.gloveDiv.querySelector(`#${selectID}`);
        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }
    }

    /**
     * Gives options to a select
     * @param {String} selectID 
     * @param {Array} options 
     */
    addOptions(selectID, options) {
        let select = this.gloveDiv.querySelector(`#${selectID}`);
        select.length = 1;
        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    /**
     * Renders the image based on the current selections
     * @returns {undefined}
     */
    renderGlove() {
        console.log('here');
        let imgSrc = 'media/glove-image/';

        this.select.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png'; //remove the last character '-'.

        this.gloveImage.querySelector('img').src = imgSrc;
    }
}