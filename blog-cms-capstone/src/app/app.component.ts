import { Component } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-cms-capstone';

  constructor(public ui:UiService) {}
}
