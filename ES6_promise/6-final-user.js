import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((results) => {
      const response = [];
      results.forEach((result) => {
        response.push({
          status: result.status,
          value:
            result.status === 'fulfilled'
              ? result.value
              : `${result.reason.name}: ${result.reason.message}`,
        });
      });
      return response;
    });
}
