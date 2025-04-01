export default function loadBalancer(chinaDownload, USDownload) {
  const promise1 = chinaDownload;
  const promise2 = USDownload;
  return Promise.race([promise1, promise2])
    .then((value) => value)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
