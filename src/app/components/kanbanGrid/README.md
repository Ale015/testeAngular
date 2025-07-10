# Kanban Drag & Drop com Angular CDK

Este exemplo mostra como criar um Kanban funcional com drag and drop entre etapas usando Angular CDK, tanto em um grid customizado quanto em um exemplo mínimo.

---

## Passo a Passo para Implementação

### 1. Instale o Angular CDK

```sh
npm install @angular/cdk
```

---

### 2. Importe o DragDropModule

**Para componentes standalone:**
```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  standalone: true,
  imports: [CommonModule, DragDropModule],
  // ...
})
```

**Para NgModule tradicional:**
```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  imports: [DragDropModule],
  // ...
})
```

---

### 3. Estruture seus dados

Cada etapa deve ser um objeto com um array de cards:
```typescript
etapas = [
  { nome: 'A Fazer', cards: ['Tarefa 1', 'Tarefa 2'] },
  { nome: 'Fazendo', cards: ['Tarefa 3'] },
  { nome: 'Feito', cards: ['Tarefa 4'] }
];
```

---

### 4. Template HTML do Kanban

```html
<div class="kanban-demo">
  <div class="etapa" *ngFor="let etapa of etapas; let i = index">
    <h3>{{ etapa.nome }}</h3>
    <div
      cdkDropList
      [id]="'cdkDropList-' + i"
      [cdkDropListData]="etapa.cards"
      [cdkDropListConnectedTo]="connectedDropLists(i)"
      (cdkDropListDropped)="drop($event)"
      class="kanban-drop-list"
    >
      <div *ngFor="let card of etapa.cards; let j = index" cdkDrag class="kanban-card">
        {{ card }}
      </div>
    </div>
  </div>
</div>
```

---

### 5. Métodos do componente

```typescript
connectedDropLists(currentIdx: number): string[] {
  // Retorna todos os dropLists menos o atual
  return this.etapas.map((_, idx) => 'cdkDropList-' + idx).filter((_, idx) => idx !== currentIdx);
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
```
Importe:
```typescript
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
```

---

### 6. CSS básico para usabilidade

```css
.kanban-demo { display: flex; gap: 24px; }
.etapa { min-width: 220px; background: #f7f7fa; border-radius: 10px; padding: 16px; }
.kanban-drop-list { min-height: 80px; border: 2px dashed #7e57c2; border-radius: 8px; padding: 8px 0; }
.kanban-card { border: 1px solid #7e57c2; background: #fff; border-radius: 6px; padding: 10px 8px; margin-bottom: 8px; cursor: grab; }
```

---

### 7. Dicas para grids ou layouts avançados

- Se usar um grid externo (ex: ktd-grid), garanta que os arrays de cards **não sejam recriados** após o drop.
- O `[cdkDropListData]` deve sempre apontar para o mesmo array de referência do seu modelo.
- Os IDs dos drop lists devem ser únicos e estáveis, e o método de conexão deve retornar todos os outros IDs menos o atual.

---

### 8. Debug e problemas comuns

- Se o card não "fica" na nova etapa, provavelmente o array está sendo recriado ou o grid está forçando atualização. Teste o exemplo mínimo antes de integrar ao grid.
- Sempre confira o console do navegador para mensagens de erro de binding ou importação.

---

## Exemplo mínimo funcional
Veja o componente `cdk-kanban-demo.component.ts` e `.html` neste diretório para um exemplo pronto para copiar e colar.

---

## Resumo
- Importe o DragDropModule
- Use arrays de referência estável
- IDs únicos para cada drop list
- Use o exemplo mínimo como base

Se seguir este guia, seu Kanban com drag and drop entre etapas funcionará em qualquer projeto Angular!
