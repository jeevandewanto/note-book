// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // --- 1. Theme Toggle ---
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "theme-toggle";
  toggleBtn.textContent = "💩";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

// --- 2. Code Block Copy Button ---
document.querySelectorAll("pre code").forEach((codeBlock) => {
  const wrapper = codeBlock.parentNode;
  wrapper.style.position = "relative";

  const button = document.createElement("button");
  button.className = "copy-btn";
  button.textContent = "Copy";

  wrapper.insertBefore(button, codeBlock);

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeBlock.innerText);
      button.textContent = "💩";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = "Copy";
        button.disabled = false;
      }, 1000);
    } catch (err) {
      button.textContent = "Err";
    }
  });
});


});
