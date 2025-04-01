export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    try {
      if (denominator === 0) {
        throw new Error('Cannot divide by 0');
      }
      resolve(numerator / denominator);
    } catch (error) {
      reject(error);
    }
  });
}
