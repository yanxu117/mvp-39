const form = document.getElementById('lead-form');
const out = document.getElementById('form-result');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get('email');
    const usecase = data.get('usecase');
    out.textContent = 'Received. We will follow up at ' + email + ' for: ' + usecase;
    form.reset();
  });
}