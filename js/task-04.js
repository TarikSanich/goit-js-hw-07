const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {};
  const formElements = event.target.elements;

  for (let i = 0; i < formElements.length; i++) {
    const { name, value } = formElements[i];
    if (name) {
      formData[name] = value.trim();
      if (!formData[name]) {
        alert('All form fields must be filled in');
        return;
      }
    }
  }

  console.log(formData);
  event.target.reset();
});

