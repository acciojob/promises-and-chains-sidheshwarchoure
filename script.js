//your JS code here. If required.
const form = document.querySelector('form');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const age = parseInt(ageInput.value);
  const name = nameInput.value;
  
  if (isNaN(age) || age < 1 || name.trim() === '') {
    alert('Please fill out both fields.');
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
  .then(() => {
    alert(`Welcome, ${name}. You can vote.`);
  })
  .catch(() => {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });
});


