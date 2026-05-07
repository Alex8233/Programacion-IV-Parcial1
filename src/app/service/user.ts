
import { Injectable, signal, computed ,inject} from '@angular/core';
import { User, UserFilter } from '../models/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'http://jsonplaceholder.typicode.com/users';

    
  private filter= signal<UserFilter>('all');
 private allUsers = signal<User[]>([]);


  users   = this.allUsers.asReadonly();
  loading = signal(false);
  error = signal<string | null>(null);

  loadUser():void{

   this.loading.set(true);
    
   this.error.set(null);

   this.http.get<any[]>(this.apiUrl).subscribe({
    next: (data) => {
     
      const transformed = data.map(apiUser => ({
        id: apiUser.id,
        nombre: apiUser.name,
        apellido: apiUser.username,
        email: apiUser.email,
        avatar: 'https://via.placeholder.com/150',
        isActive: true,
        createdAt: new Date(),
      }));
      this.allUsers.set(transformed);
      this.loading.set(false);
    },
          
    error: (error) => {
      this.error.set("error al cargar los usuarios");
      this.loading.set(false);
    }
   });
  }
 


    addUser(user: Omit<User, 'id'|'createdAt'>):void{
    const newUser : User={
  
      ...user,
  
      id: Date.now(),
      createdAt: new Date()
    };
     
    this.allUsers.update(users => [...users, newUser]);
  }

   deleteUser = (userId: number):void=>{

    this.allUsers.update(users => users.filter(user => user.id !== userId));
   }
toggleUserStatus = (userId: number):void=>{

    this.allUsers.update(users => users.map(user => 
      user.id === userId ? {...user, isActive : !user.isActive} : user
    ));
  } 

  setFilter(newfilter : string):void{
    if (newfilter === "all" || newfilter === "active" || newfilter === "inactive") {
      this.filter.set(newfilter as UserFilter);
    }
  }

  filterUsers = computed(() => {
       const currentFilter = this.filter();
    const all = this.allUsers();
       if (currentFilter === 'active')   return all.filter(u =>  u.isActive);
    if (currentFilter === 'inactive') return all.filter(u => !u.isActive);

    return all;
  });

    totalCount = computed(() => this.allUsers().length);

    filteredCount = computed(() => this.filterUsers().length);
   
}
