export const authenticateUser = async (email, password) => {
    // The URL of your backend endpoint for authentication
    const url = 'http://localhost:8080/login';
  
    try {
        // Make a POST request with the entered email and password
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // If successful, parse the token from the response
        const { token } = await response.json();
  
        // Log the token to the console
        console.log('Received token:', token);
  
        // Parse JWT to get payload (note: this does not verify the token)
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const payload = JSON.parse(window.atob(base64));
  
        console.log('Payload:', payload);
  
        return { token, userId: payload.userId }; // assuming userId is part of the payload
  
    } catch (error) {
        console.error('Failed to authenticate:', error);
        return null;
    }
  }
  