/**
* Class.js
*
* @description A model for all students
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    label: 'STRING',
    students: {
      collection: 'student',
      via: 'class'
    }
  }
};
