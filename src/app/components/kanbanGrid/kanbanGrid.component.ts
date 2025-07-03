import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KtdGridBackgroundCfg, KtdGridModule } from '@katoid/angular-grid-layout';
import { KtdGridCompactType } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-kanban-grid',
  imports: [KtdGridModule,CommonModule],
  templateUrl: './kanbanGrid.component.html',
  styleUrl: './kanbanGrid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanGridComponent {
 
 config: KtdGridBackgroundCfg = {
  show: "always",
  rowColor: 'transparent',
  borderColor : 'blue',
  borderWidth: 2,
  columnColor: 'transparent',
  //gapColor: 'orange',
 }  

  KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 1, h: 1},
    {id: '1', x: 3, y: 0, w: 2, h: 2},
    {id: '2', x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 3},
    {id: '3', x: 3, y: 3, w: 4, h: 4, minW: 2, maxW: 3, minH: 2, maxH: 5},
];

  onLayoutUpdated(event: any): void {
  // Handle the updated layout here
  // For now, just log the event
  console.log('Layout updated:', event);
}

trackById(index: number, item: any): any {
  return item.id;
}
 }
