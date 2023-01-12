import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {


  constructor( public Ui:UiService) {}
     ngOnInit(): void {
       
}
}