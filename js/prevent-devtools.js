// 防止開發者工具檢測和阻止
(() => {
  let devToolsOpen = false;
  let websitePaused = false;

  // 檢測開發者工具是否打開
  function checkDevTools() {
    const before = Date.now();
    debugger;
    const after = Date.now();
    // 如果執行 debugger 花費超過 100ms，說明開發者工具可能被打開
    if (after - before > 100) {
      return true;
    }
    return false;
  }

  // 定期檢測開發者工具
  setInterval(() => {
    if (checkDevTools() && !devToolsOpen) {
      devToolsOpen = true;
      pauseWebsite();
    }
  }, 500);

  // 監聽 F12 按鍵
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
    // Ctrl+Shift+I (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
    // Ctrl+Shift+J (Windows/Linux - console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
    // Ctrl+Shift+C (檢查元素)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
    // Cmd+Option+I (Mac)
    if (e.metaKey && e.altKey && e.key === 'i') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
    // Cmd+Option+J (Mac - console)
    if (e.metaKey && e.altKey && e.key === 'j') {
      e.preventDefault();
      if (!devToolsOpen) {
        devToolsOpen = true;
        pauseWebsite();
      }
    }
  });

  // 監聽右鍵菜單
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // 暫停網站功能
  function pauseWebsite() {
    websitePaused = true;
    // 覆蓋整個頁面
    const overlay = document.createElement('div');
    overlay.id = 'dev-tools-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: Arial, sans-serif;
      color: white;
      text-align: center;
    `;
    overlay.innerHTML = `
      <div style="max-width: 500px;">
        <h1 style="font-size: 32px; margin-bottom: 20px;">⚠️ 檢測到開發者工具</h1>
        <p style="font-size: 18px; margin-bottom: 30px; line-height: 1.6;">
          為了保護網站安全性，開發者工具被禁用。<br>
          請重新整理頁面以繼續使用本網站。
        </p>
        <button onclick="location.reload()" style="
          background: #E85D3D;
          color: white;
          border: none;
          padding: 12px 32px;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        ">重新整理</button>
      </div>
    `;
    document.body.appendChild(overlay);
    // 禁用所有互動
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';
  }

  // 檢查是否在加載時已經打開開發者工具
  window.addEventListener('load', () => {
    if (checkDevTools()) {
      pauseWebsite();
    }
  });

  // 導出全局變數供其他腳本檢查
  window.devToolsState = {
    isOpen: () => devToolsOpen,
    isPaused: () => websitePaused
  };
})();
