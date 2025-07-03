import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanTitleComponent } from './components/kanbanTitle/kanbanTitle.component';
import { KanbanGridComponent } from './components/kanbanGrid/kanbanGrid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KanbanTitleComponent, KanbanGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Grid Test';


}
