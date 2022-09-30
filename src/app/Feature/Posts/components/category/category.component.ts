import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Post } from '../../models/post';
import { PostParams } from '../../models/post-params';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private readonly destroy$ = new Subject<boolean>();
  private post: Post = {
    name: '',
    thumbnail: '',
    title: '',
    created: 0,
    numComments: 0,
    author: '',
    score: 0,
    selfText: ''
  };
  postParams: PostParams = {
    category: 'golf',
    limit: 9,
    before: '',
    after: ''
  };
  errorMessage = '';
  errorNotification = false;
  showSpinner = true;
  postsList: Post[] = [];

  limit = 10;
  before = '';
  after = '';
  totalCount = this.limit;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPost(this.postParams);
  }

  onPrevLinkClicked(prevValue: string) {
    this.postParams.before = prevValue;
    this.postParams.after = '';
    this.getPost(this.postParams);
    this.totalCount = Number(this.totalCount) - Number(this.limit);
  }

  onNextLinkClicked(nextValue: string) {
    this.postParams.before = '';
    this.postParams.after = nextValue;
    this.postParams.limit = this.limit;
    this.getPost(this.postParams);
    this.totalCount = Number(this.totalCount) + Number(this.limit);
  }

  onCategorySelected(category: string) {
    this.postParams.category = category;
    this.resetPagination();
    this.getPost(this.postParams);
  }

  onLimitSelected(limit: number) {
    this.postParams.limit = limit;
    this.limit = limit;
    this.resetPagination();
    this.getPost(this.postParams);
  }

  private getPost(postParams: PostParams) {
    this.initSearch();
    this.postService
      .getPost(postParams)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (categoryResponse) => {
          if (categoryResponse?.data?.children.length > 0) {
            categoryResponse?.data?.children?.map((postItem: any) => {
              this.post = {
                name: postItem.data.name,
                thumbnail: postItem.data.thumbnail,
                title: postItem.data.title,
                created: postItem.data.created,
                numComments: postItem.data.num_comments,
                author: postItem.data.author,
                score: postItem.data.score,
                selfText: postItem.data.selftext
              };
              this.postsList.push(this.post);
            });
            this.before = this.postsList[0].name;
            this.after = this.postsList[this.postsList.length - 1].name;
          }
        },
        error: (errorResponse) => {
          this.errorMessage =
            errorResponse.errorMessage + ' Please try again later';
          this.errorNotification = true;
        },
        complete: () => (this.showSpinner = false)
      });
  }

  private initSearch() {
    this.showSpinner = true;
    this.postsList = [];
    this.errorNotification = false;
  }

  private resetPagination() {
    this.postParams.before = '';
    this.postParams.after = '';
    this.totalCount = this.limit;
  }
}
