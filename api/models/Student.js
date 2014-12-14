/**
* Student.js
*
* @description A a model for all classes
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: 'STRING',
    lastName: 'STRING',
    class: {
      model: 'class'
    }
  }
};
