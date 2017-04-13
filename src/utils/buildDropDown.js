const buildDropDown = (units) => {
  // build drop down hours.
  if(units === 24) {
    return [...'*'.repeat(12)].map((item, i) => `<option value="${i}">${i === 0 ? 12 : i}</option>`).join('');
  }
  return [...'*'.repeat(units)].map((item, i) => `<option value="${i}">${i}</option>`).join('');
};

export default buildDropDown;
