import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import { TuiAppearance, TuiButton, TuiIcon, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiDataListWrapper, TuiSwitch, TuiTabs, TuiTooltip } from '@taiga-ui/kit';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/legacy';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CellComponent } from './cell/cell.component';
import { EMPTY_QUERY } from '@taiga-ui/cdk';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [
    TuiCardLarge,
    TuiAppearance,
    TuiTabs,
    TuiCell,
    TuiAvatar,
    TuiTitle,
    NgTemplateOutlet,
    TuiInputModule,
    TuiTextfield,
    FormsModule,
    TuiSwitch,
    TuiButton,
    CellComponent,
    TuiIcon,
    TuiDataListWrapper,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.less',
  standalone: true
})
export class ProjectComponent {
  protected value = 'Новый проект'
  protected open = false;
  protected onClick(): void {
    this.open = false;
  }
  protected activeItemIndex1 = 0;
  protected activeItemIndex2 = 0;
  protected strength = false;
  readonly resources = [
    'Квантовые трубки' ,
    'Микрочипы',
    'Энергоячейки',
    'Рационы питания',
    'Теладианий',
    'Графен',
    'Специи'
  ];

  readonly modules =
    [
      'Производство квантовых трубок' ,
      'Производство микрочипов',
      'Солнечные электростанции',
      'Производство рационов питания',
      'Производство теладиания',
      'Добыча графен',
      'Производство специй'
    ];

  currentResources: string[] = [];
  currentModules: string[]  = [];
  protected module: typeof EMPTY_QUERY | string = EMPTY_QUERY;
  protected resource: typeof EMPTY_QUERY | string = EMPTY_QUERY;
  protected readonly EMPTY_QUERY = EMPTY_QUERY;

  deleteResource(resourceToDelete: number) {
    this.currentResources = this.currentResources.filter((val,index) => index !== resourceToDelete);
  }

  deleteModule(moduleToDelete: number) {
    this.currentModules = this.currentModules.filter((val,index) => index !== moduleToDelete);
  }

  protected readonly localStorage = localStorage;
}
