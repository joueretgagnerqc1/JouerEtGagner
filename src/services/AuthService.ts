// AuthService.ts

class AuthService {
    constructor() {
        this.token = null;
    }

    login(username, password) {
        // Implement login logic
        // On success, save token
        this.token = 'dummy-token'; // Replace with actual token
        console.log('User logged in:', username);
    }

    register(username, email, password) {
        // Implement registration logic
        console.log('User registered:', username);
    }

    logout() {
        // Implement logout logic
        this.token = null;
        console.log('User logged out');
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return this.token !== null;
    }
}

export default new AuthService();