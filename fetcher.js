import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new fetch request object.
    const request = new Request('/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Send the request.
    const response = await fetch(request);

    // Check the status code of the response.
    if (response.status === 200) {
      // The request was successful.
      // Parse the response body as JSON.
      const jsonData = await response.json();

      // Access the user's form data in the jsonData object.
      // ...
    } else {
      // The request failed.
      // Handle the error.
      // ...
    }
  };
};

export default SignUpForm;
