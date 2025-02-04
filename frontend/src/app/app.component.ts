import { Component } from '@angular/core';
import { FruitComponent } from './components/fruit/fruit.component';

@Component({
  selector: 'app-root',
  imports: [FruitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
