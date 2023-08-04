export const authenticateUser = async (email, password) => {
    
    const url = 'http://localhost:8080/login';
  
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        
        const { token } = await response.json();
  
        
        console.log('Received token:', token);
  
        
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const payload = JSON.parse(window.atob(base64));
  
        console.log('Payload:', payload);
  
        return { token, userId: payload.userId,username: payload.username }; 
  
    } catch (error) {
        console.error('Failed to authenticate:', error);
        return null;
    }
  }
  