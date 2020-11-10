const getDate = (date, options) => {
  return new Date(date).toLocaleDateString('en-US', options);
};

export default { getDate };