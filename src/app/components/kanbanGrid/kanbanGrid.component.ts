import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KtdGridBackgroundCfg, KtdGridModule } from '@katoid/angular-grid-layout';
import { KtdGridCompactType } from '@katoid/angular-grid-layout';
import { EtapaComponent } from '../etapa/etapa.component';

import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban-grid',
  imports: [KtdGridModule, CommonModule, EtapaComponent],
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
    { "id": "0", "x": 0, "y": 0, "w": 4, "h": 14 },
    { "id": "1", "x": 12, "y": 6, "w": 4, "h": 4 },
    { "id": "2", "x": 12, "y": 10, "w": 4, "h": 4 },
    { "id": "3", "x": 16, "y": 10, "w": 4, "h": 4, "minW": 2, "minH": 2 },
    { "id": "4", "x": 4, "y": 0, "w": 4, "h": 14 },
    { "id": "5", "x": 8, "y": 0, "w": 4, "h": 2 },
    { "id": "6", "x": 8, "y": 6, "w": 4, "h": 4 },
    { "id": "7", "x": 12, "y": 2, "w": 4, "h": 4 },
    { "id": "8", "x": 8, "y": 2, "w": 4, "h": 4 },
    { "id": "9", "x": 12, "y": 0, "w": 12, "h": 2 },
    { "id": "10", "x": 20, "y": 2, "w": 4, "h": 4 },
    { "id": "11", "x": 24, "y": 0, "w": 4, "h": 4 },
    { "id": "12", "x": 16, "y": 2, "w": 4, "h": 4 },
    { "id": "13", "x": 8, "y": 10, "w": 4, "h": 4 },
    { "id": "14", "x": 16, "y": 6, "w": 4, "h": 4 },
    { "id": "15", "x": 20, "y": 6, "w": 4, "h": 4 },
    { "id": "16", "x": 20, "y": 10, "w": 4, "h": 4 },
    { "id": "17", "x": 24, "y": 8, "w": 4, "h": 6 },
    { "id": "18", "x": 24, "y": 4, "w": 4, "h": 4 }
  ]


  onLayoutUpdated(event: any): void {
    // Handle the updated layout here
    // For now, just log the event
    console.log('Layout updated:', event);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
