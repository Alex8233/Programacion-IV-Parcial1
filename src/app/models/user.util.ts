import { User } from "./user.model";
export class UserUtil{
    static getfullName(user: User): string{
        return `${user.nombre} ${user.apellido}`;
    }
    static getinitials(user:User):string {
        return `${user.nombre.charAt(0)}${user.apellido.charAt(0)}`.toLowerCase();
    }
    static formatDate(date: Date): string{
        return date.toLocaleDateString('es-AR',{
            day: "numeric",
            month: "short",
            year:"numeric"
        });
    }
}