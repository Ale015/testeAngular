import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanGridComponent } from './components/kanbanGrid/kanbanGrid.component';

@Component({
  selector: 'app-root',
  imports: [ KanbanGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Grid Test';


}
