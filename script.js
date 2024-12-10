document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  const nameInput = document.getElementById("name").value.trim();
  const ageInput = parseInt(document.getElementById("age").value.trim());

  
  if (!nameInput || isNaN(ageInput)) {
    alert("Both fields are required.");
    return;
  }

  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageInput > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000); 
  })
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});

