const getRandomColor = () => {
  const letters = '0123456789abcdef';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const checkIsHexColor = (hex) => {
  const regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
  return regex.test(hex);
}

const getContrastColor = (hexcolor) => {
  let [r, g, b] = [0, 0, 0];
  if (hexcolor.length === 4) {
    r = parseInt(hexcolor.charAt(1).repeat(2), 16);
    g = parseInt(hexcolor.charAt(2).repeat(2), 16);
    b = parseInt(hexcolor.charAt(3).repeat(2), 16);
  } else {
    r = parseInt(hexcolor.substr(1, 2), 16);
    g = parseInt(hexcolor.substr(3, 2), 16);
    b = parseInt(hexcolor.substr(5, 2), 16);
  }
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}

export default { getRandomColor, checkIsHexColor, getContrastColor };