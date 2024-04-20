const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const storageData = localStorage.getItem(localStorageKey) ?? '';

if (storageData) {
  const formData = JSON.parse(storageData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// ================================================

form.addEventListener('input', handleInput);

function handleInput(event) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

// ================================================

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    window.alert('Please, fill the both fields before submit');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(localStorageKey);

  form.reset();
}
