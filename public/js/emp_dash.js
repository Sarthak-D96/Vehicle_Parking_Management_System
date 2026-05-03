//  clear session or token if stored

document.getElementById("logoutBtn").addEventListener("click", () => {
    

    
    alert("Logging out...");
    window.location.href = "/login/index.html";
  });
  
  function navigateTo(section) {
    alert(`Navigating to: ${section}`);
    // You can replace these with actual routes later
    // window.location.href = `/${section}/index.html`;
  }
  
