import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent {

  constructor( public Ui:UiService) {}
     ngOnInit(): void {
       
}
}