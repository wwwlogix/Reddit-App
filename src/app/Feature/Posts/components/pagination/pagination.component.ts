import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() prevValue = '';
  @Input() nextValue = '';
  @Input() limit = 0;
  @Input() totalCount = 0;
  @Output() prevLinkClicked = new EventEmitter<string>();
  @Output() nextLinkClicked = new EventEmitter<string>();

  onPrevClicked(): void {
    if (this.totalCount > this.limit) {
      this.prevLinkClicked.emit(this.prevValue);
    }
  }
  onNextClicked(): void {
    this.nextLinkClicked.emit(this.nextValue);
  }
}
