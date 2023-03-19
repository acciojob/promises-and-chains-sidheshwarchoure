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
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 25
      });
    }, 4000);
  })
  .then(obj => {
    return obj.age;
  })
  .then(age => {
    return {
      welcomeMessage: `Welcome, John. You are ${age} years old.`
    };
  });
}

myPromise().then(data => {
  alert(data.welcomeMessage);
});
And here's an example of how you could use this promise to validate a form and show an alert based on the age input:

javascript
Copy code
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





