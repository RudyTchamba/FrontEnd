/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}