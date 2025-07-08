import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddEtapaBtnComponent } from './addEtapa/addEtapaBtn/addEtapaBtn.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from '../card/card/card.component';


@Component({
  selector: 'app-etapa',
  imports: [AddEtapaBtnComponent, CardComponent, DragDropModule],
  templateUrl: './etapa.component.html',
  styleUrl: './etapa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtapaComponent { }
