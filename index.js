function submitData(userName, userEmail) {

const formData = {
    name: userName,
    email: userEmail
  };
  
  const configUser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configUser)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const id = object.id;
    document.body.innerHTML += id
  })
  .catch(function(error) {
    document.body.innerHTML += error.message;
  })
}