import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Category } from '../../models/category';
import { Limits } from '../../models/limits';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly categories: Category[] = [
    { id: 1, value: 'golf' },
    { id: 2, value: 'football' },
    { id: 3, value: 'cricket' }
  ];
  readonly limits: Limits[] = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
  ];
  readonly baseUrl = environment.apiUrl;
  selectedCategory = 'golf';
  selectedLimit = 10;

  @Output() categorySelected = new EventEmitter<string>();
  @Output() limitSelected = new EventEmitter<number>();

  onCategorySelected() {
    this.categorySelected.emit(this.selectedCategory);
  }

  onLimitSelected() {
    this.limitSelected.emit(this.selectedLimit);
  }
}
