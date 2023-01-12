import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor( public Ui:UiService) {}
     ngOnInit(): void {
       

}
}