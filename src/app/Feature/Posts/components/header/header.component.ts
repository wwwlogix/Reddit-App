import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
