export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const conver1D2D = (original, n) => {
  // If the length of the original array is not equal to the product of dimensions m and n
  // Then it's not possible to construct a 2D array of m x n, return empty array
  if (m * n !== original.length) {
    return [];
  }

  // Initialize an empty array for the 2D array
  const twoDArray = [];

  // Loop through the original array with step of size n
  for (let i = 0; i < original.length; i += n) {
    // Push a slice of the original array of length n into twoDArray
    twoDArray.push(original.slice(i, i + n));
  }

  // Return the constructed 2D array
  return twoDArray;
};
