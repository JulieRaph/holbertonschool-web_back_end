export default function uploadPhoto(fileName, success = false) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
