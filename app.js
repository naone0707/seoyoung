const form = document.querySelector("#waitlist-form");
const note = document.querySelector("#form-note");
const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.currentTarget.getAttribute("data-scroll");
    if (!target) return;
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.email.value.trim();

  if (!email) {
    note.textContent = "Please enter a valid email.";
    return;
  }

  note.textContent = "You're on the list. We'll reach out soon.";
  form.reset();
});
