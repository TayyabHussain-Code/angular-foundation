import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('World');
  name = 'Tayyab';
  imageUrl =
    'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4';
  username = '';
  isLoggedIn = true;
  users = ['Ali', 'Ahmed', 'Tayyab'];

  sayHello() {
    alert('Hello 🚀');
  }
}
