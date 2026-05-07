import {HttpInterceptorFn} from '@angular/common/http';
// retry → reintenta la request si falla
// delay → agrega espera entre reintentos
import {retry, delay} from 'rxjs/operators';
// Crea un Observable simple
// ✔ se usa para construir el delay dinámico
import{of} from 'rxjs';
// Interceptor que se ejecuta en cada request HTTP

// req → la petición
// next → la continúa
 export const retryInterceptor: HttpInterceptorFn = (req, next) => {
    // Envía la request al servidor
    // .pipe() es donde le decís qué hacer con los datos antes de recibirlos.
    return next(req).pipe(
        // Configura reintentos automáticos
        // count: 3 significa:
        // intenta la request hasta 3 veces más si falla
   
        retry({
            count: 3,
//    retryCount número de intento actual
            // va creciendo:
            // 1 → primer retry
            // 2 → segundo
            // 3 → tercero
            // of(retryCount)

// 👉 crea un observable con ese valor
// .pipe(delay(...)) → espera un tiempo determinado antes de reintentarintento 1 → 1000 ms (1s)
                // intento 2 → 2000 ms (2s)
                // intento 3 → 3000 ms (3s)
            delay: (retryCount) => of(retryCount).pipe(delay(1000 * retryCount))
        })
    );
 }