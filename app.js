const form = document.querySelector("#waitlist-form");
const note = document.querySelector("#form-note");
const scrollButtons = document.querySelectorAll("[data-scroll]");
const ctaButtons = document.querySelectorAll(
  ".btn.btn-primary, .btn.btn-ghost, .nav .btn"
);

function trackEvent(name, params) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

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

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label =
      button.textContent && button.textContent.trim()
        ? button.textContent.trim()
        : "cta";
    trackEvent("cta_click", { event_category: "engagement", event_label: label });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.email.value.trim();

  if (!email) {
    note.textContent = "Please enter a valid email.";
    return;
  }

  trackEvent("waitlist_submit", {
    event_category: "lead",
    event_label: "early_access",
  });
  note.textContent = "You're on the list. We'll reach out soon.";
  form.reset();
});
