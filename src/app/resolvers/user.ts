import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { UserService } from "../service/user";
import { User } from "../models/user.model";

export const userResolver: ResolveFn<User | null> = (route) => {
    // Obtiene el servicio donde están los usuarios
  const userService = inject(UserService);
//   obtiene el id de la URL y lo convierte a número
  const id = Number(route.paramMap.get('id'));
//   Si el ID no es un número:

// devuelve null
// no rompe la apps
  if(isNaN(id) ) {
    return null;
  }
  // El resolver devuelve:
  //
  // ✅ el usuario (si existe)
  // ❌ null (si no existe o el id es inválido)
  return userService.users().find(u => u.id === id) ?? null;
};