import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AddEtapaBtnComponent } from './addEtapa/addEtapaBtn/addEtapaBtn.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

import { CardComponent } from '../card/card/card.component';


@Component({
  selector: 'app-etapa',
  imports: [AddEtapaBtnComponent, CardComponent, DragDropModule, CdkDropList, CdkDrag],
  templateUrl: './etapa.component.html',
  styleUrl: './etapa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtapaComponent { 


  @Input() idE: string | undefined;

  cards = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones'
  ]


  drop(Evento: CdkDragDrop<string[]>){
    console.log("dropped")

    moveItemInArray(this.cards, Evento.previousIndex , Evento.currentIndex
    )
  }
}
