document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!document.body.matches(".planner-body, .projects-body")) {
    const socialRail = document.createElement("nav");
    socialRail.className = "social-rail";
    socialRail.setAttribute("aria-label", "Social and contact links");
    socialRail.innerHTML = `
      <a href="https://github.com/chizaram25" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.558 21.924c.563.104.769-.244.769-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.51-3.79-1.51-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.077-.686.077-.686 1.131.08 1.726 1.161 1.726 1.161 1.006 1.724 2.64 1.226 3.283.937.102-.728.394-1.226.716-1.508-2.499-.284-5.126-1.25-5.126-5.562 0-1.229.439-2.234 1.16-3.021-.117-.284-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.154A10.79 10.79 0 0 1 12 6.183c.956.004 1.918.129 2.817.379 2.148-1.457 3.091-1.154 3.091-1.154.615 1.549.229 2.694.113 2.978.722.787 1.158 1.792 1.158 3.021 0 4.323-2.632 5.275-5.139 5.554.404.35.764 1.041.764 2.098 0 1.515-.014 2.737-.014 3.108 0 .3.203.651.774.54A11.252 11.252 0 0 0 12 .75Z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/chizaram-obi-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.37 24H.4V7.98h4.97ZM2.88 5.79A2.89 2.89 0 1 1 2.9 0a2.89 2.89 0 0 1-.02 5.79ZM24 24h-4.96v-7.8c0-1.86-.04-4.25-2.59-4.25-2.59 0-2.99 2.03-2.99 4.12V24H8.5V7.98h4.76v2.19h.07c.66-1.26 2.28-2.59 4.69-2.59 5.02 0 5.98 3.3 5.98 7.59Z"/></svg>
      </a>
      <a href="https://www.facebook.com/share/19ZkYmewZf/" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)" title="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.875 11.855v-8.386H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.386A12.003 12.003 0 0 0 24 12Z"/></svg>
      </a>
      <a href="https://www.instagram.com/obichizaram22?exln=MTFqYmJldXM0Z2hrYw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" title="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="contact.html" aria-label="Get in touch" title="Get in touch">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>
      </a>`;
    document.body.appendChild(socialRail);
    const updateSocialRail = () => {
      const hidden = window.scrollY > 80;
      socialRail.classList.toggle("is-hidden", hidden);
      socialRail.toggleAttribute("inert", hidden);
      socialRail.setAttribute("aria-hidden", String(hidden));
    };
    window.addEventListener("scroll", updateSocialRail, { passive: true });
    window.addEventListener("pageshow", updateSocialRail);
    updateSocialRail();
  }

  // Storage can be unavailable in private browsing or restricted previews.
  const readSaved = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const writeSaved = (key, value) => {
    try { localStorage.setItem(key, value); return true; } catch { return false; }
  };

  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavContainer = mobileMenuToggle?.closest(".nav-container");
  if (mobileMenuToggle && mobileNavContainer) {
    const setMobileMenuOpen = (isOpen) => {
      mobileNavContainer.classList.toggle("is-menu-open", isOpen);
      mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileMenuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    };

    mobileMenuToggle.addEventListener("click", () => {
      setMobileMenuOpen(mobileMenuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileNavContainer.querySelectorAll(".nav-side a").forEach((link) => {
      link.addEventListener("click", () => setMobileMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenuToggle.getAttribute("aria-expanded") === "true") {
        setMobileMenuOpen(false);
        mobileMenuToggle.focus();
      }
    });
  }

  const heroImage = document.querySelector(".hero-image");
  const heroFallback = document.querySelector(".hero-image-fallback");
  if (heroImage && heroFallback) {
    const showImage = () => heroFallback.classList.add("is-hidden");
    const showFallback = () => {
      heroImage.classList.add("is-hidden");
      heroFallback.classList.remove("is-hidden");
    };

    heroImage.addEventListener("load", showImage);
    heroImage.addEventListener("error", showFallback);
    if (heroImage.complete) {
      heroImage.naturalWidth > 0 ? showImage() : showFallback();
    }
  }

  const themeToggle = document.getElementById("themeToggle");
  const themeSurface = hero || document.querySelector(".planner-main, .projects-main, .contact-main, .about-main");
  if (themeToggle && themeSurface) {
    const header = document.querySelector(".hero-header");
    const statsSection = document.querySelector(".stats-section");
    const contactCta = document.querySelector(".contact-cta-section");
    const siteFooter = document.querySelector(".site-footer");
    const contactFooter = document.querySelector(".contact-footer");
    const aboutFooter = document.querySelector(".about-footer");
    const savedTheme = readSaved("portfolio_theme");
    const startsLight = savedTheme === "light";
    themeSurface.classList.toggle("is-light", startsLight);
    document.body.classList.toggle("is-light", startsLight);
    header?.classList.toggle("is-light", startsLight);
    statsSection?.classList.toggle("is-light", startsLight);
    contactCta?.classList.toggle("is-light", startsLight);
    siteFooter?.classList.toggle("is-light", startsLight);
    contactFooter?.classList.toggle("is-light", startsLight);
    aboutFooter?.classList.toggle("is-light", startsLight);
    themeToggle.setAttribute("aria-pressed", String(startsLight));
    themeToggle.setAttribute("aria-label", startsLight ? "Switch to dark mode" : "Switch to light mode");

    themeToggle.addEventListener("click", () => {
      const isLight = themeSurface.classList.toggle("is-light");
      document.body.classList.toggle("is-light", isLight);
      header?.classList.toggle("is-light", isLight);
      statsSection?.classList.toggle("is-light", isLight);
      contactCta?.classList.toggle("is-light", isLight);
      siteFooter?.classList.toggle("is-light", isLight);
      contactFooter?.classList.toggle("is-light", isLight);
      aboutFooter?.classList.toggle("is-light", isLight);
      writeSaved("portfolio_theme", isLight ? "light" : "dark");
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    });
  }

  const introVideo = document.getElementById("introVideo");
  const videoStage = document.getElementById("videoStage");
  if (introVideo && videoStage) {
    const showVideo = () => {
      introVideo.hidden = false;
      videoStage.classList.add("has-video");
    };
    introVideo.addEventListener("loadedmetadata", showVideo);
    if (introVideo.readyState >= 1) showVideo();
  }

  const currentYear = document.getElementById("year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  const skillMarquees = [...document.querySelectorAll(".about-marquee")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    skillMarquees.forEach((marquee) => marquee.classList.add("is-static"));
  } else if (skillMarquees.length) {
    skillMarquees.forEach((marquee) => {
      const track = marquee.querySelector(".about-marquee-track");
      const group = track?.querySelector(".about-marquee-group");
      if (!track || !group) return;

      const duplicate = group.cloneNode(true);
      duplicate.setAttribute("aria-hidden", "true");
      track.appendChild(duplicate);

      const sizeTrack = () => {
        track.style.setProperty("--marquee-distance", `${group.getBoundingClientRect().width}px`);
      };

      sizeTrack();
      if ("ResizeObserver" in window) {
        new ResizeObserver(sizeTrack).observe(group);
      } else {
        window.addEventListener("resize", sizeTrack);
      }
      marquee.classList.add("is-ready");
    });
  }

  const aboutMain = document.querySelector(".about-main");
  if (aboutMain) {
    const revealTargets = [...aboutMain.querySelectorAll(
      ".about-page-intro .container, .about-intro-copy, .about-video-frame, .about-section-heading, .about-education-item, .about-aspiration-item, .about-marquee, .about-interest-item, .about-closing-inner"
    )];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      revealTargets.forEach((target, index) => {
        target.classList.add("about-reveal");
        target.style.setProperty("--reveal-delay", `${(index % 3) * 85}ms`);
      });

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

      revealTargets.forEach((target) => revealObserver.observe(target));
    }
  }

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const counters = [...statsSection.querySelectorAll("[data-count]")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count);
        if (!Number.isFinite(target)) return;
        if (reducedMotion) {
          counter.textContent = String(target);
          return;
        }

        const duration = 900;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = String(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };

    const revealStats = () => {
      statsSection.classList.add("is-visible");
      animateCounters();
    };

    if ("IntersectionObserver" in window && !reducedMotion) {
      statsSection.classList.add("will-animate");
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealStats();
          observer.disconnect();
        }
      }, { threshold: 0.2 });
      observer.observe(statsSection);
    } else {
      revealStats();
    }
  }

  const contactCta = document.querySelector(".contact-cta-section");
  if (contactCta) {
    const revealContact = () => contactCta.classList.add("is-visible");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      contactCta.classList.add("will-animate");
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealContact();
          observer.disconnect();
        }
      }, { threshold: 0.2 });
      observer.observe(contactCta);
    } else {
      revealContact();
    }
  }

  const siteFooter = document.querySelector(".site-footer");
  if (siteFooter) {
    const revealFooter = () => siteFooter.classList.add("is-visible");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      siteFooter.classList.add("will-animate");
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealFooter();
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      observer.observe(siteFooter);
    } else {
      revealFooter();
    }
  }

  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  if (addTaskBtn && taskInput && taskList) {
    const taskForm = document.getElementById("plannerTaskForm");
    const status = document.getElementById("plannerStatus");
    const taskStatuses = {
      active: "Active",
      "in-progress": "In progress",
      done: "Done",
      review: "Review",
      completed: "Completed"
    };
    let tasks = [];
    try {
      const savedTasks = JSON.parse(readSaved("miva_tasks"));
      if (Array.isArray(savedTasks)) {
        tasks = savedTasks.filter((task) => task && typeof task.text === "string" && task.text.trim())
          .map((task) => {
            const taskStatus = Object.hasOwn(taskStatuses, task.status)
              ? task.status : task.completed === true ? "completed" : "active";
            return { ...task, status: taskStatus, completed: taskStatus === "completed" };
          });
      }
    } catch {
      if (status) status.textContent = "Saved tasks could not be read. You can start a new list.";
    }

    const saveTasks = () => {
      if (!writeSaved("miva_tasks", JSON.stringify(tasks)) && status) {
        status.textContent = "Browser storage is unavailable. Your tasks will only stay for this visit.";
      }
    };

    const updateCounts = () => {
      document.querySelectorAll("[data-task-count]").forEach((counter) => {
        counter.textContent = String(tasks.filter((task) => task.status === counter.dataset.taskCount).length);
      });
    };

    const renderTasks = () => {
      taskList.innerHTML = "";

      if (!tasks.length) {
        const empty = document.createElement("li");
        empty.className = "planner-helper";
        empty.textContent = "Your board is clear. Add a task to get started.";
        taskList.appendChild(empty);
      }

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;
        li.dataset.status = task.status;

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const statusLabel = document.createElement("label");
        statusLabel.className = "task-status-label";
        const statusSelect = document.createElement("select");
        statusSelect.className = "task-status-select";
        statusSelect.setAttribute("aria-label", `Status for ${task.text}`);
        Object.entries(taskStatuses).forEach(([value, label]) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = label;
          statusSelect.appendChild(option);
        });
        statusSelect.value = task.status;
        statusSelect.addEventListener("change", () => {
          task.status = statusSelect.value;
          task.completed = task.status === "completed";
          li.dataset.status = task.status;
          li.classList.toggle("completed", task.completed);
          updateCounts();
          saveTasks();
        });
        statusLabel.appendChild(statusSelect);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("aria-label", `Delete ${task.text}`);
        deleteBtn.addEventListener("click", () => {
          tasks.splice(index, 1);
          renderTasks();
          const nextTask = taskList.children[Math.min(index, tasks.length - 1)];
          if (nextTask) nextTask.querySelector(".btn-danger")?.focus();
          else taskInput.focus();
        });

        actions.append(statusLabel, deleteBtn);
        li.append(taskText, actions);
        taskList.appendChild(li);
      });

      updateCounts();
      saveTasks();
    };

    const addTask = (event) => {
      event.preventDefault();
      const text = taskInput.value.trim();

      if (!text) {
        taskInput.setCustomValidity("Please enter a task description.");
        taskInput.reportValidity();
        return;
      }

      tasks.push({ id: Date.now(), text, status: "active", completed: false });
      taskInput.value = "";
      renderTasks();
      taskInput.focus();
    };

    taskInput.addEventListener("input", () => taskInput.setCustomValidity(""));
    if (taskForm) taskForm.addEventListener("submit", addTask);
    else addTaskBtn.addEventListener("click", addTask);

    renderTasks();
  }

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const countryCode = document.getElementById("countryCode");
      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");
      const messageError = document.getElementById("messageError");
      const successAlert = document.getElementById("successAlert");
      const formError = document.getElementById("formError");
      const submitButton = contactForm.querySelector('[type="submit"]');
      const submitLabel = submitButton.innerHTML;
      const fields = [
        { input: name, error: nameError, invalid: !name.value.trim() },
        { input: email, error: emailError, invalid: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) },
        { input: phone, error: phoneError, invalid: !/^\d+$/.test(phone.value.trim()) },
        { input: message, error: messageError, invalid: !message.value.trim() }
      ];

      let isValid = true;

      fields.forEach(({ input, error, invalid }) => {
        input.setAttribute("aria-invalid", String(invalid));
        error.style.display = invalid ? "block" : "none";
        if (invalid) isValid = false;
      });

      if (!isValid) {
        successAlert.style.display = "none";
        formError.style.display = "none";
        return;
      }

      successAlert.style.display = "none";
      formError.style.display = "none";
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      contactForm.setAttribute("aria-busy", "true");

      try {
        const formData = new FormData(contactForm);
        formData.set("phone", `${countryCode.value} ${phone.value.trim()}`);
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Formspree submission failed");

        successAlert.style.display = "block";
        contactForm.reset();
        fields.forEach(({ input, error }) => {
          input.setAttribute("aria-invalid", "false");
          error.style.display = "none";
        });
      } catch {
        formError.style.display = "block";
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = submitLabel;
        contactForm.removeAttribute("aria-busy");
      }
    });
  }

  const faqButtons = [...document.querySelectorAll(".faq-question")];
  const setFaqOpen = (button, isOpen) => {
    const item = button.closest(".faq-item");
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    item?.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    if (answer) answer.hidden = !isOpen;
    const indicator = button.querySelector("span");
    if (indicator) indicator.textContent = isOpen ? "−" : "+";
  };

    faqButtons.forEach((button) => {
      setFaqOpen(button, false);
      button.addEventListener("click", () => {
        const shouldOpen = button.getAttribute("aria-expanded") !== "true";
        faqButtons.forEach((faqButton) => setFaqOpen(faqButton, shouldOpen && faqButton === button));
      });
    });

});
