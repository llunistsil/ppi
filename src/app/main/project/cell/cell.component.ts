import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiCell } from '@taiga-ui/layout';
import { TuiButton, TuiIcon, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiHovered } from '@taiga-ui/cdk';

@Component({
  selector: 'app-cell',
  imports: [
    TuiCell,
    TuiTitle,
    TuiTextfield,
    TuiAvatar,
    TuiHovered,
  ],
  templateUrl: './cell.component.html',
  standalone: true,
  styleUrl: './cell.component.less'
})
export class CellComponent {
  @Input({ required: true}) title = '';
  @Input({ required: true}) index!: number;

  protected hovered = false;

  protected onHovered(hovered: boolean): void {
    this.hovered = hovered;
  }

  @Output() deleteCellEvent = new EventEmitter<number>();

  deleteCell() {
    this.deleteCellEvent.emit(this.index);
  }
}
