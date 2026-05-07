import { Component,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quien-soy',
  imports: [],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css',
})
export class QuienSoy {
  private http = inject(HttpClient);

  user = signal<any>(null);

  ngOnInit() {
    this.http.get('https://api.github.com/users/Alex8233')
      .subscribe(data => {
        this.user.set(data);
      });
  }
}
