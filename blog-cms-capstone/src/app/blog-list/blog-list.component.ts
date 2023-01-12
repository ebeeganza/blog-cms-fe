import { Component } from '@angular/core';
import { Blog } from 'Blog';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
public blogs: Blog[] = []

constructor( public Ui:UiService) {}
     ngOnInit(): void {
       
}
}