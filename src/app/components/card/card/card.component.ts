import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-card',
  imports: [DragDropModule, CdkDrag],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class  CardComponent { 
  a =  (Math.random() * 10).toFixed(2);  
}
