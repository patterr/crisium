document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
});

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

const form = document.getElementById('inquiryForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const organization = form.organization.value.trim();
  const engagement = form.engagement.value;
  const message = form.message.value.trim();

  const subject = `Crisium Group Inquiry: ${engagement}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Organization: ${organization || 'N/A'}\n` +
    `Engagement type: ${engagement}\n\n` +
    `${message}`;

  window.location.href =
    `mailto:ruby@crisiumgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
