export default {
    install(app, options) {
        let currentlanguage = 'ru';
        app.config.globalProperties.$alert = (text) => {
            window.alert(text);
        }

        app.config.globalProperties.$i18 = (key) => {
            //app.title => [app, title]
            return key.split('.').reduce((acc, item) => {
                return acc[item] || "=== UNKNOWN ==="
            }, options[currentlanguage])
        }

        app.config.globalProperties.$changeLanguage = (lang) => {
            currentlanguage = lang;
            console.log(currentlanguage)
        }

        app.config.globalProperties.$getLang = () => {
            return currentlanguage;
        }
    
    }
}
