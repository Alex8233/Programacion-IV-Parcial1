export interface User {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    isActive: boolean;
    createdAt: Date;
}
export type UserFilter = "all"|"active"|"inactive";
export const MOCK_USERS: User[] = [
    {id:1,
    nombre:"Juan",
    apellido:"Perez",
    email: 'juan.perez@example.com',
    avatar: 'https://via.placeholder.com/150',isActive: true,
    createdAt: new Date('2023-01-01')}
   
]