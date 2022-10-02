import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ALL_COMPONENTS } from './components';
@NgModule({
  declarations: [ALL_COMPONENTS],
  exports: [ALL_COMPONENTS],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatIconModule
  ]
})
export class PostsModule {}
