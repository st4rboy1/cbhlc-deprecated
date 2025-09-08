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
const modal = document.getElementById("openModal");
const closeBtns = document.getElementById("closeModal");
const openBtn = document.getElementById("openModal")

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
document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

document.querySelectorAll(".has-dropdown .nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.stopPropagation(); // para hindi magsara agad
    const dropdown = link.nextElementSibling;

    // Close other dropdowns
    document.querySelectorAll(".has-dropdown .dropdown").forEach(d => {
      if (d !== dropdown) {
        d.style.opacity = 0;
        d.style.visibility = "hidden";
        d.style.transform = "translateY(-10px)";
      }
    });

    // Toggle this dropdown
    if (dropdown.style.visibility === "visible") {
      dropdown.style.opacity = 0;
      dropdown.style.visibility = "hidden";
      dropdown.style.transform = "translateY(-10px)";
    } else {
      dropdown.style.opacity = 1;
      dropdown.style.visibility = "visible";
      dropdown.style.transform = "translateY(0)";
    }
  });
});

// 🔥 Make sure <a> links work
document.querySelectorAll(".has-dropdown .dropdown a").forEach(a => {
  a.addEventListener("click", (e) => {
    // allow default redirect
    window.location.href = a.getAttribute("href");
  });
});

// Close dropdown on outside click
document.addEventListener("click", () => {
  document.querySelectorAll(".has-dropdown .dropdown").forEach(d => {
    d.style.opacity = 0;
    d.style.visibility = "hidden";
    d.style.transform = "translateY(-10px)";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const notifBtn = document.getElementById("openModal");
  const notifDropdown = document.getElementById("notificationDropdown");

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // para di magsara agad
      notifDropdown.style.display =
        notifDropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!notifDropdown.contains(event.target) && event.target !== notifBtn) {
        notifDropdown.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    // Check if submit button already exists
    if (!document.getElementById("registerBtn")) {
      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.className = "btn";
      submitBtn.id = "registerBtn";
      submitBtn.textContent = "Register";
      registerForm.appendChild(submitBtn);
    }

    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(registerForm);

      fetch("register.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data === "success") {
          alert("Registration successful!");
          registerForm.reset();
        } else {
          alert("Registration failed.");
        }
      });
    });
  }
});
});

