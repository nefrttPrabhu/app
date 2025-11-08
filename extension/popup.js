document.getElementById("saveBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const data = await chrome.tabs.sendMessage(tab.id, { action: "capture" });

  const payload = {
    userId: "demo_user",
    url: data.url,
    selectedHtml: data.html,
    typeHint: "article",
  };

  await fetch("http://localhost:5000/api/v1/capture", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  alert("✅ Saved to Synapse!");
});
