
//Guard (canActivate) → decide si podés entrar
// Entrás a /users/3
// Angular ejecuta el guard
// Toma el id
// Valida:
// que sea número
// que sea válido (> 0)
// que exista en la lista
// Si todo OK → entra
// Si algo falla → redirige a /users


import {inject} from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import {UserService} from "../service/user";
    // Si devuelve true → deja pasar ✅
    // Si devuelve false → bloquea la navegación ❌
export const userExists: CanActivateFn = (route, state) => {
    // UserService → para acceder a los usuarios
    // Router → para redirigir si algo falla
  const userService = inject(UserService);
  const router = inject(Router);
  // route.paramMap.get('id') → obtiene el id de la URL lo convierte a número
  const id = Number(route.paramMap.get('id'));
  // si no es número (NaN)o es menor o igual a 0
  // redirige a /users
  // bloquea la navegación
  if(isNaN(id) || id <= 0) {
    router.navigate(['/users']);
    return false;
  }
//   .some(...):

// recorre la lista de usuarios
// devuelve true si encuentra uno con ese id
  const userExists = userService.users().some(u => u.id === id);
  // Si el usuario NO existe:
  //
  // redirige a /users
  // bloquea la ruta
  if (!userExists) {
    router.navigate(['/users']);
    return false;
  }
  // Si todo está bien:
  //
  // deja pasar a la ruta
  // carga el componente (UserDetail)
  return true;
};