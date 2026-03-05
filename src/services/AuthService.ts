// AuthService.ts

class AuthService {
    constructor() {
        this.token = null;
    }

    // Handle User Registration
    register(userData) {
        // Logic for registering a new user
        return fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
    }

    // Handle User Login
    login(credentials) {
        // Logic for user login
        return fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }).then(response => response.json())
          .then(data => {
              this.token = data.token;
              localStorage.setItem('token', this.token);
          });
    }

    // Handle User Logout
    logout() {
        this.token = null;
        localStorage.removeItem('token');
        // Additional logout logic if necessary
    }

    // Token Management
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }
}

export default new AuthService();
