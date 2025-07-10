import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cdk-kanban-demo',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './cdk-kanban-demo.component.html',
  styleUrls: ['./cdk-kanban-demo.component.scss']
})
export class CdkKanbanDemoComponent {
  etapas = [
    { nome: 'A Fazer', cards: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'] },
    { nome: 'Fazendo', cards: ['Tarefa 4'] },
    { nome: 'Feito', cards: ['Tarefa 5'] }
  ];

  connectedDropLists(currentIdx?: number): string[] {
    if (typeof currentIdx === 'number') {
      return this.etapas.map((_, idx) => 'cdkDropList-' + idx).filter((_, idx) => idx !== currentIdx);
    }
    return this.etapas.map((_, idx) => 'cdkDropList-' + idx);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
