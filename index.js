(() => {
    // Block right-click
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
        trigger();
    });

    // Block common shortcuts
    document.addEventListener("keydown", e => {
        const k = e.key.toLowerCase();

        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(k)) ||
            (e.ctrlKey && k === "u") ||
            (e.metaKey && e.altKey && k === "i")
        ) {
            e.preventDefault();
            e.stopPropagation();
            trigger();
        }
    }, true);

    // DevTools size detection
    setInterval(() => {
        const threshold = 160;

        if (
            window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold
        ) {
            trigger();
        }
    }, 500);

    // Debugger trap
    setInterval(() => {
        debugger;
    }, 50);

    let fired = false;

    function trigger() {
        if (fired) return;
        fired = true;

        try {
            window.close();
        } catch {}

        try {
            history.back();
        } catch {}

        try {
            location.replace("about:blank");
        } catch {}

        document.documentElement.innerHTML = "";
    }
})();
