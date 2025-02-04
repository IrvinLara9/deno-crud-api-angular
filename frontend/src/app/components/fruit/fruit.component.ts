import { Component, OnInit } from '@angular/core';
import { Fruit, FruitService } from '../../services/fruit.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fruit',
  imports: [FormsModule],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
})
export class FruitComponent implements OnInit {
  fruits: Fruit[] = [];
  newFruit: Fruit = { name: '', color: '', price: 0 };
  selectedFruit: Fruit | null = null;

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.loadFruits();
  }

  loadFruits(): void {
    this.fruitService.getFruits().subscribe((data) => (this.fruits = data));
  }

  addOrUpdateFruit(): void {
    if (!this.newFruit.name || !this.newFruit.color || this.newFruit.price <= 0)
      return;

    if (this.selectedFruit) {
      this.fruitService
        .updateFruit(this.selectedFruit._id!, this.newFruit)
        .subscribe(() => {
          this.loadFruits();
          this.resetForm();
        });
    } else {
      this.fruitService.addFruit(this.newFruit).subscribe(() => {
        this.loadFruits();
        this.resetForm();
      });
    }
  }

  deleteFruit(id: string): void {
    this.fruitService.deleteFruit(id).subscribe(() => this.loadFruits());
  }

  editFruit(fruit: Fruit): void {
    this.selectedFruit = { ...fruit };
    this.newFruit = { ...fruit };
  }

  getFruitById(id: string): void {
    this.fruitService.getFruit(id).subscribe((fruit) => {
      this.selectedFruit = fruit;
      this.newFruit = { ...fruit };
    });
  }

  resetForm(): void {
    this.newFruit = { name: '', color: '', price: 0 };
    this.selectedFruit = null;
  }
}
