// Sirve para definir un interceptor en Angular moderno
// ✔ Indica que esta función va a interceptar requests HTTP
import {HttpInterceptorFn} from '@angular/common/http';
// Importa el operador finalize de RxJS
// Se ejecuta cuando termina la petición
// Funciona tanto en éxito como en error
//Se usa para ejecutar algo al final de una operación,
import { finalize } from 'rxjs/operators';
// Crea un interceptor llamado logging

// req → la request (GET, POST, etc.)
// next → función que pasa la request al siguiente paso
 export const logging: HttpInterceptorFn = (req, next) => {
    // Guardar tiempo inicial
    const startTime = Date.now();
//     Muestra en consola:

// req.method → tipo de request (GET, POST…)
// req.url → URL de la petición

// ✔ Sirve para saber cuándo empieza una request
    console.log(`[HTTP] ${req.method} ${req.url} - Start`);
//     Envía la request al servidor
// .pipe(...)

// 👉 Permite aplicar operadores de RxJS
return next(req).pipe(
    // Se ejecuta cuando la request termina
    finalize(() => {
        // Calcular tiempo transcurrido
        const duration = Date.now() - startTime;
        // Muestra en consola:
        console.log(`[HTTP] ${req.method} ${req.url} - ${duration}ms`);
    })
);
//     Finaliza la petición
 }