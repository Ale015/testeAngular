import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban-title',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './kanbanTitle.component.html',
  styleUrl: './kanbanTitle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanTitleComponent {
  kanbans = [
    { id: 1, nome: 'Kanban 1' },
    { id: 2, nome: 'Kanban 2' },
    { id: 3, nome: 'Kanban 3' }
  ];
  selectedKanbanId = this.kanbans[0].id;

  onKanbanChange(event: Event) {
    // lógica para troca de kanban, se necessário
  }
}
