import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { Router, RouterLink } from '@angular/router';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-profile',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiCardLarge,
    TuiIcon,
    RouterLink,
    FormsModule,
    TuiTitle,
    TuiAppearance,
    TuiAvatar
  ],
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.less'
})
export class ProfileComponent {

  private readonly router = inject(Router);

  protected readonly localStorage = localStorage;

  projects = [
    'Верфь',
    'Электростанция',
    'Производство дронов',
    'Приют контробандиста',
    'Штаб-квартира',
    'Торговая станция'
  ]

  deleteProjects(projectToDelete: number) {
    this.projects = this.projects.filter((val,index) => index !== projectToDelete);
  }

  navi(): void {
    this.router.navigate(['/']);
  }
}
