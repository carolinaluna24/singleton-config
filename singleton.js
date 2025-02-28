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
            theme: "dark"   // tema oscuro por defecto
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

// Aquí solicitamos la configuración de la app por primera vez
const appConfig1 = Config.getInstance();

// Aquí volvemos a pedir la configuración, pero esta vez es la misma (la ya creada)
const appConfig2 = Config.getInstance();

// Imprime el idioma configurado, que es "es" (español)
console.log(appConfig1.language); // "es"

// Verificamos que `appConfig1` y `appConfig2` son el mismo objeto
// Esto confirma que el Singleton está funcionando (solo hay una instancia compartida)
console.log(appConfig1 === appConfig2); // true