import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: Post = {
    name: '',
    thumbnail: '',
    title: '',
    created: 0,
    numComments: 0,
    author: '',
    score: 0,
    selfText: ''
  };
  show = false;
  showLessLabel = 'Show less';
  showMoreLabel = 'Show More';
  label = this.showMoreLabel;
  showMore() {
    this.show = !this.show;
    this.label =
      this.label == this.showLessLabel
        ? this.showMoreLabel
        : this.showLessLabel;
  }
}
