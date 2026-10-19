document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // Highlight Active Navigation Link (per page)
  // -----------------------------
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // -----------------------------
  // Hero Buttons (on home page)
  // -----------------------------
  const heroButtons = document.querySelectorAll('.hero-content button');
  heroButtons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.95)';
    });

    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1)';
    });

    btn.addEventListener('click', () => {
      console.log(`Button clicked: ${btn.textContent}`);
    });
  });

  // -----------------------------
  // Featured Styles Hover Lift (already styled, just extra shadow)
  // -----------------------------
  const styleCards = document.querySelectorAll('.style');
  styleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = 'none';
    });
  });

  // -----------------------------
  // Artist Card Click Behavior
  // -----------------------------
  const artistCards = document.querySelectorAll('.artist');
  artistCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('h3').textContent;
      alert(`Opening profile for ${name}...`);
    });
  });

  // -----------------------------
  // Find Artists: Search Filter
  // -----------------------------
  const artistSearchInput = document.getElementById('artistSearch');
  const artistList = document.querySelectorAll('#artistList .artist');

  if (artistSearchInput && artistList.length > 0) {
    artistSearchInput.addEventListener('input', () => {
      const query = artistSearchInput.value.toLowerCase();

      artistList.forEach(artist => {
        const name = artist.querySelector('h3').textContent.toLowerCase();
        const style = artist.getAttribute('data-style')?.toLowerCase() || '';
        const text = artist.textContent.toLowerCase();

        if (name.includes(query) || style.includes(query) || text.includes(query)) {
          artist.style.display = 'block';
        } else {
          artist.style.display = 'none';
        }
      });
    });
  }

  // -----------------------------
  // Submit Style: Save to localStorage
  // -----------------------------
  const styleForm = document.getElementById('styleForm');
  const styleSelect = document.getElementById('styleSelect');
  const styleDescription = document.getElementById('styleDescription');
  const styleMessage = document.getElementById('styleMessage');

  if (styleForm) {
    styleForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const selectedStyle = styleSelect.value;
      const description = styleDescription.value.trim();

      const styleData = {
        style: selectedStyle,
        description: description
      };

      localStorage.setItem('inkfinder_style', JSON.stringify(styleData));

      styleMessage.textContent = 'Your style has been saved! Check your profile to see it.';
    });

    // Pre-fill if data exists
    const savedStyle = localStorage.getItem('inkfinder_style');
    if (savedStyle) {
      const data = JSON.parse(savedStyle);
      if (data.style) styleSelect.value = data.style;
      if (data.description) styleDescription.value = data.description;
    }
  }

  // -----------------------------
  // Login: Save email to localStorage
  // -----------------------------
  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const loginMessage = document.getElementById('loginMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();

      if (!email || !password) {
        loginMessage.textContent = 'Please enter both email and password.';
        return;
      }

      // Mock login: just store email
      localStorage.setItem('inkfinder_user_email', email);
      loginMessage.textContent = 'You are logged in! Visit your profile to see your info.';
    });

    // Pre-fill email if saved
    const savedEmail = localStorage.getItem('inkfinder_user_email');
    if (savedEmail) {
      loginEmail.value = savedEmail;
    }
  }

  // -----------------------------
  // Profile: Load data from localStorage
  // -----------------------------
  const profileEmailSpan = document.getElementById('profileEmail');
  const profileStyleSpan = document.getElementById('profileStyle');
  const profileDescriptionSpan = document.getElementById('profileDescription');

  if (profileEmailSpan && profileStyleSpan && profileDescriptionSpan) {
    const savedEmail = localStorage.getItem('inkfinder_user_email');
    const savedStyle = localStorage.getItem('inkfinder_style');

    if (savedEmail) {
      profileEmailSpan.textContent = savedEmail;
    }

    if (savedStyle) {
      const data = JSON.parse(savedStyle);
      profileStyleSpan.textContent = data.style || 'None submitted';
      profileDescriptionSpan.textContent = data.description || 'N/A';
    }
  }

  // -----------------------------
  // Optional Dark Mode Toggle (if you add a button with id="darkModeToggle")
  // -----------------------------
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    // Load initial state
    const savedTheme = localStorage.getItem('inkfinder_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }

    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('inkfinder_theme', isDark ? 'dark' : 'light');
    });
  }
});