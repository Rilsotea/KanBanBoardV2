import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Get error details
      throw new Error(errorData.message || 'User information not retrieved, check network tab!');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Store the token for future requests

    return data; // Return the user data or token as needed
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };
