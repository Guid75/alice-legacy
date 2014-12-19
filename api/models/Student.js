/**
* Student.js
*
* @description A a model for all classes
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    class: {
      model: 'class'
    }
  }
};
