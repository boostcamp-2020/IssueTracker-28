const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = (key) => {
  return localStorage.getItem(key);
};

const removeItem = (key) => {
  return localStorage.removeItem(key);
};
const clear = () => {
  return localStorage.clear();
};

export default { setItem, getItem, removeItem, clear };
