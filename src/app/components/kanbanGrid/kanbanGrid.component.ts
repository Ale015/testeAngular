import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KtdGridBackgroundCfg, KtdGridModule } from '@katoid/angular-grid-layout';
import { KtdGridCompactType } from '@katoid/angular-grid-layout';

import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban-grid',
  imports: [KtdGridModule, CommonModule, DragDropModule],
  templateUrl: './kanbanGrid.component.html',
  styleUrl: './kanbanGrid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanGridComponent {

  config: KtdGridBackgroundCfg = {
    show: "always",
    rowColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 1,
    columnColor: 'transparent',
    //gapColor: 'orange',
    
  }

  KtdGridLayout = [
    { "id": "0", "x": 0, "y": 0, "w": 4, "h": 14, cards: ['Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones']},
    { "id": "1", "x": 12, "y": 6, "w": 4, "h": 4 , cards:[]},
    { "id": "2", "x": 12, "y": 10, "w": 4, "h": 4, cards:[] },
    { "id": "3", "x": 16, "y": 10, "w": 4, "h": 4, "minW": 2, "minH": 2 , cards:[]},
    { "id": "4", "x": 4, "y": 0, "w": 4, "h": 14 , cards:[]},
    { "id": "5", "x": 8, "y": 0, "w": 4, "h": 2 , cards:[]},
    { "id": "6", "x": 8, "y": 6, "w": 4, "h": 4 , cards:[]},
    { "id": "7", "x": 12, "y": 2, "w": 4, "h": 4 , cards:[]},
    { "id": "8", "x": 8, "y": 2, "w": 4, "h": 4, cards:[] },
    { "id": "9", "x": 12, "y": 0, "w": 12, "h": 2 ,cards:[]},
    { "id": "10", "x": 20, "y": 2, "w": 4, "h": 4 ,cards:[]},
    { "id": "11", "x": 24, "y": 0, "w": 4, "h": 4 ,cards:[]},
    { "id": "12", "x": 16, "y": 2, "w": 4, "h": 4 ,cards:[]},
    { "id": "13", "x": 8, "y": 10, "w": 4, "h": 4 ,cards:[]},
    { "id": "14", "x": 16, "y": 6, "w": 4, "h": 4 ,cards:[]},
    { "id": "15", "x": 20, "y": 6, "w": 4, "h": 4 ,cards:[]},
    { "id": "16", "x": 20, "y": 10, "w": 4, "h": 4,cards:[] },
    { "id": "17", "x": 24, "y": 8, "w": 4, "h": 6 ,cards:[]},
    { "id": "18", "x": 24, "y": 4, "w": 4, "h": 4 ,cards:[]}
  ]


  onLayoutUpdated(event: any): void {
    // Handle the updated layout here
    // For now, just log the event
    console.log('Layout updated:', event);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }



drop(event: CdkDragDrop<string[]>) {
  const previousId = event.previousContainer.id;
  const currentId = event.container.id;

  const previous = this.KtdGridLayout.find(e => e.id === previousId);
  const current = this.KtdGridLayout.find(e => e.id === currentId);

  if (!previous || !current) return;

  if (previousId === currentId) {
    moveItemInArray(current.cards, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      previous.cards,
      current.cards,
      event.previousIndex,
      event.currentIndex
    );
  }
}

connectedDropListIds(currentId: string): string[] {
  return this.KtdGridLayout
    .map(item => String(item.id))
    .filter(id => id !== currentId);
}
  
}
