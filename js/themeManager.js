(() => {
    const themeAttr = "data-bs-theme";

    window.setTheme = t => {
        document.documentElement.setAttribute(themeAttr, t);
    };

    window.getCurrentTheme = () => {
        return document.documentElement.getAttribute(themeAttr);
    };
})();