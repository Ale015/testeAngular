import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kanban-grid',
  imports: [],
  templateUrl: './kanbanGrid.component.html',
  styleUrl: './kanbanGrid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanGridComponent { }
