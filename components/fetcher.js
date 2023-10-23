const handleSubmit = async (e) => {
  e.preventDefault();

  const request = new Request("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    console.log(jsonData)
    // Access the user's form data in the jsonData object.
    // ...
  } else {
    // The request failed.
    // Handle the error.
    // ...
  }
};
