const body = document.querySelector('body');

export default {
    install(app, options) {
        const savedTheme = localStorage.getItem('themeType');
        const defaultTheme = savedTheme || 'lightBackground';

        document.body.classList.add(defaultTheme);

        app.config.globalProperties.$setTheme = (theme) => {
            localStorage.setItem("themeType", theme)
        }

        app.config.globalProperties.$getTheme = () => {
            body.classList.remove("darkBackground", "lightBackground")
            const theme = localStorage.getItem("themeType");
            body.classList.add(theme);
        }
    }
}