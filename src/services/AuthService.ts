// AuthService.ts

class AuthService {
    constructor() {
        // Initialize token
        this.token = null;
    }

    // User login
    async login(username, password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.token) {
            this.token = data.token;
            localStorage.setItem('auth_token', this.token);
        }
        return data;
    }

    // User registration
    async register(username, password) {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return await response.json();
    }

    // User logout
    logout() {
        this.token = null;
        localStorage.removeItem('auth_token');
    }

    // Token management
    getToken() {
        return this.token || localStorage.getItem('auth_token');
    }

    isAuthenticated() {
        return !!this.getToken();
    }
}

export default new AuthService();