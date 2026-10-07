document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".page-loader");

  window.setTimeout(() => {
    loader?.classList.add("done");
    document.querySelectorAll(".reveal").forEach((el, index) => {
      window.setTimeout(() => el.classList.add("is-visible"), 90 + index * 55);
    });
  }, 650);

  /*
    ARTICLE DATA
    The risk percentage is stored once in articles.js.
    Change `risk` there and it updates the Blog card and article page.
  */
  const articles = Array.isArray(window.SCAM_ARTICLES) ? window.SCAM_ARTICLES : [];

  const homeGrid = document.querySelector("#home-report-grid");
  const blogGrid = document.querySelector("#blog-report-grid");
  const grid = homeGrid || blogGrid;
  if (grid && articles.length) {
    // Homepage: always show only the 3 newest investigations.
    // Blog: show the complete article list.
    const visibleArticles = homeGrid ? articles.slice(0, 3) : articles;
    grid.innerHTML = visibleArticles.map((article) => `
      <a class="report-card" href="${article.href}">
        <div class="report-image">
          <img src="${article.image}" alt="Preview screenshot for ${escapeHtml(article.title)}" loading="lazy">
          <span class="report-image-tag">FICTIONAL DEMO</span>
        </div>
        <div class="report-body">
          <h3>${escapeHtml(article.title)}</h3>
          <time datetime="${article.dateISO}">${escapeHtml(article.date)}</time>
          <div class="risk-line"><i></i> Risk ${article.risk}% <b>→</b></div>
        </div>
      </a>
    `).join("");
  }

  const articleSlug = document.body.dataset.articleSlug;
  if (articleSlug) {
    const article = articles.find((item) => item.slug === articleSlug);
    if (article) {
      document.querySelectorAll(".score-track").forEach((track) => {
        track.dataset.score = article.risk;
        track.setAttribute("aria-valuenow", article.risk);
        const value = track.closest(".score-box")?.querySelector(".score-value");
        if (value) value.textContent = article.risk;
        const note = track.closest(".score-box")?.querySelector(".score-note");
        if (note) note.innerHTML = `Manual editorial score for this fictional case. Change <code>risk: ${article.risk}</code> for this article in <code>articles.js</code>.`;
      });
    }
  }

  document.querySelectorAll(".score-track").forEach((track) => {
    const score = Math.min(100, Math.max(0, Number(track.dataset.score) || 0));
    const value = track.closest(".score-box")?.querySelector(".score-value");
    const fill = track.querySelector(".score-fill");
    track.setAttribute("aria-valuenow", score);
    if (value) value.textContent = score;
    if (fill) fill.style.width = `${score}%`;
  });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ===== REPORT FORM HARDENING ===== */
const reportForm = document.getElementById("scam-report-form");
if (reportForm) {
  const reportMessage = document.getElementById("report-form-message");
  const startedAt = Date.now();
  reportForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = reportForm.getAttribute("action") || "";
    const honeypot = reportForm.querySelector('input[name="_gotcha"]');
    if (honeypot?.value || Date.now() - startedAt < 2500) {
      reportMessage.className = "form-message error";
      reportMessage.textContent = "Please take a moment to review the report before submitting.";
      return;
    }
    if (endpoint.includes("YOUR_FORM_ID")) {
      reportMessage.className = "form-message error";
      reportMessage.textContent = "Formspree is not connected yet. Replace YOUR_FORM_ID in contact.html with your Formspree form ID.";
      return;
    }
    const button = reportForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.querySelector("span").textContent = "…";
    reportMessage.className = "form-message";
    reportMessage.textContent = "Sending report…";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(reportForm),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      reportForm.reset();
      reportMessage.className = "form-message success";
      reportMessage.textContent = "REPORT RECEIVED — thank you. Your submission has been sent for review.";
    } catch (error) {
      reportMessage.className = "form-message error";
      reportMessage.textContent = "We could not send the report. Please try again or check the Formspree endpoint.";
    } finally {
      button.disabled = false;
      button.querySelector("span").textContent = "→";
    }
  });
}
