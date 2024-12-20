import { Component, inject } from '@angular/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import {
  TuiAppearance,
  TuiButton,
  TuiIcon,
  TuiLabel, TuiTextfield
} from '@taiga-ui/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../user/user.service';
import { FormsModule } from '@angular/forms';
import { TuiTextareaModule } from '@taiga-ui/legacy';
import { TuiTabs } from '@taiga-ui/kit';
import { ProjectComponent } from './project/project.component';
import { filter, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    TuiButton,
    RouterLink,
    TuiCardLarge,
    TuiAppearance,
    FormsModule,
    TuiTextareaModule,
    TuiTextfield,
    TuiIcon,
    TuiTabs,
    RouterModule,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.less'
})
export class MainComponent {
}
