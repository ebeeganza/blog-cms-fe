import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  public commentBody: string = ""
  public commentDate: Date | undefined

  constructor( public Ui:UiService) {}
     ngOnInit(): void {
       
}
}