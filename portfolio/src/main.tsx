import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  // Select main tab contents
  const tabs = document.querySelectorAll('.tab-content');
  const navBtns = document.querySelectorAll('.nav-btn');
  const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const menuBtn = document.getElementById('menu-btn');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  // Active tab selection
  let activeTabId = 'about';

  function switchTab(tabId: string) {
    activeTabId = tabId;
    tabs.forEach(tab => {
      if (tab.id === `tab-${tabId}`) {
        tab.classList.remove('hidden');
        tab.classList.add('animate-fade-in');
      } else {
        tab.classList.add('hidden');
        tab.classList.remove('animate-fade-in');
      }
    });

    // Desktop Buttons State
    navBtns.forEach(btn => {
      const dataTab = btn.getAttribute('data-tab');
      const indicator = btn.querySelector('.nav-indicator');
      if (dataTab === tabId) {
        btn.classList.add('text-blue-600', 'font-bold');
        btn.classList.remove('text-gray-600', 'font-medium');
        indicator?.classList.remove('hidden');
      } else {
        btn.classList.remove('text-blue-600', 'font-bold');
        btn.classList.add('text-gray-600', 'font-medium');
        indicator?.classList.add('hidden');
      }
    });

    // Mobile Buttons State
    mobileNavBtns.forEach(btn => {
      const dataTab = btn.getAttribute('data-tab');
      if (dataTab === tabId) {
        btn.classList.add('bg-blue-50', 'text-blue-600', 'font-semibold');
        btn.classList.remove('text-gray-600', 'font-medium');
      } else {
        btn.classList.remove('bg-blue-50', 'text-blue-600', 'font-semibold');
        btn.classList.add('text-gray-600', 'font-medium');
      }
    });

    // Close mobile nav on switch
    if (mobileNavPanel && !mobileNavPanel.classList.contains('hidden')) {
      mobileNavPanel.classList.add('hidden');
      menuIconOpen?.classList.remove('hidden');
      menuIconClose?.classList.add('hidden');
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bind clicks to buttons
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  mobileNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  // Bind logo nav to home (about)
  const logoNav = document.getElementById('logo-nav');
  logoNav?.addEventListener('click', () => {
    switchTab('about');
  });

  // Bind CTA Go To Buttons
  document.querySelectorAll('.cta-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const gotoTab = btn.getAttribute('data-goto');
      if (gotoTab) switchTab(gotoTab);
    });
  });

  // Mobile Menu Toggling
  menuBtn?.addEventListener('click', () => {
    if (mobileNavPanel) {
      const isHidden = mobileNavPanel.classList.contains('hidden');
      if (isHidden) {
        mobileNavPanel.classList.remove('hidden');
        menuIconOpen?.classList.add('hidden');
        menuIconClose?.classList.remove('hidden');
      } else {
        mobileNavPanel.classList.add('hidden');
        menuIconOpen?.classList.remove('hidden');
        menuIconClose?.classList.add('hidden');
      }
    }
  });

  // ---------------------------------
  // AVATAR PHOTO UPLOADING MECHANICS
  // ---------------------------------
  const uploader = document.getElementById('profile-avatar-uploader');
  const fileInput = document.getElementById('photo-input') as HTMLInputElement | null;
  const profileImg = document.getElementById('profile-img') as HTMLImageElement | null;
  const profileInitials = document.getElementById('profile-initials');
  const btnRemovePhoto = document.getElementById('btn-remove-photo');

  // Load photo from local storage
  const savedPhoto = localStorage.getItem('profile_photo_url');
  if (savedPhoto && profileImg && profileInitials && btnRemovePhoto) {
    profileImg.src = savedPhoto;
    profileImg.classList.remove('hidden');
    profileInitials.classList.add('hidden');
    btnRemovePhoto.classList.remove('hidden');
  }

  function handleFile(file: File) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && profileImg && profileInitials && btnRemovePhoto) {
          const base64Url = e.target.result as string;
          profileImg.src = base64Url;
          profileImg.classList.remove('hidden');
          profileInitials.classList.add('hidden');
          btnRemovePhoto.classList.remove('hidden');
          localStorage.setItem('profile_photo_url', base64Url);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  uploader?.addEventListener('click', (e) => {
    // If we clicked the remove button, do not trigger the upload input
    if (e.target && (e.target as HTMLElement).closest('#btn-remove-photo')) {
      return;
    }
    fileInput?.click();
  });

  fileInput?.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) handleFile(file);
  });

  // Drag & drop support
  uploader?.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploader.classList.add('border-blue-500', 'scale-105', 'bg-blue-50');
  });

  uploader?.addEventListener('dragleave', () => {
    uploader.classList.remove('border-blue-500', 'scale-105', 'bg-blue-50');
  });

  uploader?.addEventListener('drop', (e: DragEvent) => {
    e.preventDefault();
    uploader.classList.remove('border-blue-500', 'scale-105', 'bg-blue-50');
    const file = e.dataTransfer?.files?.[0];
    if (file) handleFile(file);
  });

  btnRemovePhoto?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (profileImg && profileInitials && btnRemovePhoto && fileInput) {
      profileImg.src = '';
      profileImg.classList.add('hidden');
      profileInitials.classList.remove('hidden');
      btnRemovePhoto.classList.add('hidden');
      fileInput.value = '';
      localStorage.removeItem('profile_photo_url');
    }
  });

  // ---------------------------------
  // CV PRINT BUTTON
  // ---------------------------------
  const btnPrint = document.getElementById('btn-print-cv');
  btnPrint?.addEventListener('click', () => {
    window.print();
  });

  // ---------------------------------
  // CONTACT FORM SUBMISSION
  // ---------------------------------
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const contactSuccess = document.getElementById('contact-success');
  const btnResetContact = document.getElementById('btn-reset-contact');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    if (submitBtn) {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending...`;

      setTimeout(() => {
        contactForm.classList.add('hidden');
        contactSuccess?.classList.remove('hidden');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    }
  });

  btnResetContact?.addEventListener('click', () => {
    contactSuccess?.classList.add('hidden');
    contactForm?.classList.remove('hidden');
  });

  // Set current year in footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }
});
