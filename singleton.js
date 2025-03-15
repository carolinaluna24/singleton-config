//Ejecutar el código usando node singleton.js
// 
// Definimos el patrón Singleton llamado "Config"
// Singleton se crea automáticamente cuando se carga el archivo.
const Config = (function () {

    // Esta variable guardará la única instancia de Config (la única configuración posible)
    let instance;

    // Esta función crea la configuración inicial de la aplicación
    function createInstance() {
        return {
            language: "es", // idioma por defecto
            theme: "dark", // tema oscuro por defecto

            //Método para cambiar el idioma
            setLanguage: function (lang) {
                this.language = lang;
                // Evento para notificar que la configuración ha cambiado
                document.dispatchEvent(new CustomEvent('config-changed'));
                return this;
            },

            //Método para cambiar el tema
            setTheme: function (theme) {
                this.theme = theme;
                // Evento para notificar que la configuración ha cambiado
                document.dispatchEvent(new CustomEvent('config-changed'));
                return this;
            }
        };
    }

    // Retornamos un objeto con el método público `getInstance`
    return {
        // Este método controla que solo haya una instancia de la configuración
        getInstance: function () {
            // Si la instancia no existe, la crea
            if (!instance) {
                instance = createInstance();
            }
            // Devuelve la única instancia (ya sea la recién creada o una existente)
            return instance;
        }
    };
})();


// Ejecutamos este código de demostración
if (typeof window !== 'undefined') {
    // El código de consola se mantiene para referencia
    const appConfig1 = Config.getInstance();
    const appConfig2 = Config.getInstance();
    console.log("Configuración inicial:");
    console.log("Idioma:", appConfig1.language);
    console.log("Tema:", appConfig1.theme);
    console.log("¿Son la misma instancia?", appConfig1 === appConfig2);
} else {
    // Para ejecución con Node.js
    const appConfig1 = Config.getInstance();
    const appConfig2 = Config.getInstance();
    console.log(appConfig1.language); // "es"
    console.log(appConfig1 === appConfig2); // true
}

// Exportamos Config para usarlo en el navegador
if (typeof window !== 'undefined') {
    window.Config = Config;
}