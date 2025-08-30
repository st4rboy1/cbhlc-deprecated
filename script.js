document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.wrapper');
  const loginLinkBtns = document.querySelectorAll('.login-link-btn'); // <-- lahat ng login links
  const registerLinkBtn = document.querySelector('.register-link-btn');
  const forgotpassLinkBtn = document.querySelector('.forgot-pass-btn');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');
  const logoutBtn = document.getElementById("logoutBtn");
  const enrollmentBtn = document.getElementById("enrollmentBtn");
  const dashboardBtn = document.getElementById("dashboardBtn");
  const billingBtn = document.getElementById("billingBtn");
  const studRepBtn = document.getElementById("studRepBtn");
  const registrarBtn = document.getElementById("registrarBtn");


  // Open login form
  if (btnPopup) {
    btnPopup.addEventListener('click', () => {
      wrapper.classList.add('active-popup');
    });
  }

  // Switch to register
  if (registerLinkBtn) {
    registerLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper.classList.remove('active-password');
      wrapper.classList.add('active-register');
    });
  }

  // Switch to forgot password
  if (forgotpassLinkBtn) {
    forgotpassLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper.classList.remove('active-register');
      wrapper.classList.add('active-password');
    });
  }

  // Go back to login (for BOTH register + forgot password)
  if (loginLinkBtns) {
    loginLinkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.remove('active-register');
        wrapper.classList.remove('active-password');
      });
    });
  }

  // Enrollment redirect
  if (enrollmentBtn) {
    enrollmentBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "enrollment.html";
    });
  }

  if (billingBtn) {
    billingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "billing.html";
    });
  }

  if (studRepBtn) {
    studRepBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "studentrep.html";
    });
  }
  // Regis
  if (registrarBtn) {
    registrarBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "registrar.html";
    });
  }

  // Logout redirect
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html"; // balik login page
    });
  }

  // Dashboard
  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
  



  // Close popup
  if (iconClose) {
    iconClose.addEventListener('click', () => {
      wrapper.classList.remove('active');
      wrapper.classList.remove('active-popup');
    });
  }

  // Show login, hide verse + footer + bg
  const loginBtn = document.querySelector(".btnLogin-popup");
  const closeBtn = document.querySelector(".icon-close");
  const landing = document.querySelector(".landing");
  const footer = document.querySelector("footer");
  const body = document.querySelector("body");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      if (landing) landing.style.display = "none";
      if (footer) footer.style.display = "none";
      if (body) body.style.background = "none";
      if (wrapper) wrapper.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (landing) landing.style.display = "block";
      if (footer) footer.style.display = "block";
      if (body) body.style.background = "url('login bg.png') no-repeat center center/cover";
      if (wrapper) wrapper.style.display = "none";
    });
  }

  // Mock login function
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.querySelector("input[type='text']").value;
      const password = form.querySelector("input[type='password']").value;

      if (email === "nero" && password === "sanjose") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }
});
