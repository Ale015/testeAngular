import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KtdGridBackgroundCfg, KtdGridModule } from '@katoid/angular-grid-layout';
import { KtdGridCompactType } from '@katoid/angular-grid-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkKanbanDemoComponent } from './cdk-kanban-demo.component';


@Component({
  selector: 'app-kanban-grid',
  standalone: true,
  imports: [KtdGridModule, CommonModule, DragDropModule, CdkKanbanDemoComponent],
  templateUrl: './kanbanGrid.component.html',
  styleUrls: ['./kanbanGrid.component.scss'],
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
    { id: "0", x: 0, y: 0, w: 4, h: 14, cards: [
      'Episode I - The Phantom Menace',
      'Episode II - Attack of the Clones',
      'Episode III - Revenge of the Sith',
      'Episode IV - A New Hope',
    ]},
    { id: "1", x: 12, y: 6, w: 4, h: 4, cards: [
      'Episode V - The Empire Strikes Back',
      'Episode VI - Return of the Jedi',
    ]},
    { id: "2", x: 12, y: 10, w: 4, h: 4, cards: [
      'Episode VII - The Force Awakens',
      'Episode VIII - The Last Jedi',
    ] },
    { id: "3", x: 16, y: 10, w: 4, h: 4, minW: 2, minH: 2, cards: [
      'Episode IX - The Rise of Skywalker',
      'Rogue One: A Star Wars Story',
    ]},
    { id: "4", x: 4, y: 0, w: 4, h: 14, cards: [
      'Solo: A Star Wars Story',
      'The Mandalorian',
    ]},
    { id: "5", x: 8, y: 0, w: 4, h: 2, cards: [
      'Obi-Wan Kenobi',
    ]},
    { id: "6", x: 8, y: 6, w: 4, h: 4, cards: [
      'The Book of Boba Fett',
    ]},
    { id: "7", x: 12, y: 2, w: 4, h: 4, cards: [
      'Andor',
    ]},
    { id: "8", x: 8, y: 2, w: 4, h: 4, cards: [
      'Star Wars Rebels',
    ] },
    { id: "9", x: 12, y: 0, w: 12, h: 2, cards: [
      'Star Wars: The Clone Wars',
    ]},
    { id: "10", x: 20, y: 2, w: 4, h: 4, cards: [
      'Star Wars Resistance',
    ]},
    { id: "11", x: 24, y: 0, w: 4, h: 4, cards: [
      'The Bad Batch',
    ]},
    { id: "12", x: 16, y: 2, w: 4, h: 4, cards: [
      'Tales of the Jedi',
    ]},
    { id: "13", x: 8, y: 10, w: 4, h: 4, cards: [
      'Visions',
    ]},
    { id: "14", x: 16, y: 6, w: 4, h: 4, cards: [
      'Young Jedi Adventures',
    ]},
    { id: "15", x: 20, y: 6, w: 4, h: 4, cards: [
      'Forces of Destiny',
    ]},
    { id: "16", x: 20, y: 10, w: 4, h: 4, cards: [
      'Galaxy of Adventures',
    ] },
    { id: "17", x: 24, y: 8, w: 4, h: 6, cards: [
      'Droids',
    ]},
    { id: "18", x: 24, y: 4, w: 4, h: 4, cards: [
      'Ewoks',
    ]}
  ]


  onLayoutUpdated(event: any): void {
    // Handle the updated layout here
    // For now, just log the event
    console.log('Layout updated:', event);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }

  // Corrigir: garantir que o método drop recebe o tipo correto
  drop(event: CdkDragDrop<string[]>) {
    const previousId = event.previousContainer.id.replace('dropList-', '');
    const currentId = event.container.id.replace('dropList-', '');

    const previous = this.KtdGridLayout.find(e => String(e.id) === String(previousId));
    const current = this.KtdGridLayout.find(e => String(e.id) === String(currentId));

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
  // Retorna os IDs formatados para o DOM, exceto o atual
  return this.KtdGridLayout
    .map(item => 'dropList-' + String(item.id))
    .filter(id => id !== 'dropList-' + String(currentId));
}
  
}
