/* eslint-disable */
export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    if (denominator === 0) {
      return reject(new Error('cannot divide by 0'));
    }
    resolve(numerator / denominator);
  });
}
