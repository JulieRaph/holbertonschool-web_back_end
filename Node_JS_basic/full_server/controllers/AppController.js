// Class for the basic roadmap of the server
// This class is used to handle the requests and responses of the server

class AppController {
    static getHomepage(request, response) {
        response.statusCode = 200;
        response.send('Hello Holberton School!');
    }
};
export default AppController;
