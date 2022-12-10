function getRandomIndex(arr: (number | string)[]): number | string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomColor(): string {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += getRandomIndex(hexArray);
  }
  return hex;
}

export default getRandomColor;
