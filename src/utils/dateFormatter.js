import React from 'react';

// TODO: change this to take in prop (date from JSON)
const getDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  return date + '-' + month + '-' + year;
};

export default getDate;
