function validateDate(isDate) {
  try {
    let date = new Date(isDate);
    if (isNaN(date.getTime())) return false;
    
    return date.toISOString();
  } catch (e) {
    return false;
  }
}

module.exports = validateDate;
