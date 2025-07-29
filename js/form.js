document.addEventListener("DOMContentLoaded", () => {
  const whitelistForm = document.getElementById("whitelistForm");
  if (!whitelistForm) return;

  whitelistForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Ambil data form
    const formData = new FormData(whitelistForm);
    const data = Object.fromEntries(formData);

    // Validasi input
    if (!data.fullName || !data.email) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    // Tombol loading state
    const btn = whitelistForm.querySelector(".submit-button");
    const oldText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Submitting...`;
    btn.disabled = true;

    try {
      // Kirim ke backend Express.js + Supabase
      const res = await fetch("http://localhost:5000/whitelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        showNotification("Successfully joined the whitelist!", "success");
        whitelistForm.reset();
      } else {
        showNotification(result.message || "Submission failed", "error");
      }
    } catch (err) {
      showNotification("Server error. Please try again.", "error");
    } finally {
      btn.innerHTML = oldText;
      btn.disabled = false;
    }
  });
});

// Fungsi notifikasi
function showNotification(message, type = "info") {
  // Hapus notifikasi sebelumnya
  document.querySelectorAll(".notification").forEach((n) => n.remove());

  // Buat elemen notifikasi
  const div = document.createElement("div");
  div.className = `notification notification-${type}`;
  div.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <i class="fas ${
        type === "success"
          ? "fa-check-circle"
          : type === "error"
          ? "fa-exclamation-circle"
          : "fa-info-circle"
      }"></i>
      <span>${message}</span>
    </div>
  `;

  // Styling notifikasi
  div.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 12px 18px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    background: ${
      type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#2196F3"
    };
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(div);

  // Animasi masuk
  setTimeout(() => {
    div.style.opacity = "1";
    div.style.transform = "translateX(0)";
  }, 50);

  // Hapus otomatis
  setTimeout(() => {
    div.style.opacity = "0";
    div.style.transform = "translateX(100%)";
    setTimeout(() => div.remove(), 300);
  }, 4000);
}
