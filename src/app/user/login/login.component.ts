import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { TuiAppearance, TuiButton, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-login',
  imports: [
    TuiIcon,
    TuiButton,
    TuiTextfield,
    TuiPassword,
    TuiCardLarge,
    RouterLink,
    TuiLink,
    TuiAppearance
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.less'
})
export class LoginComponent {
  protected readonly userService = inject(UserService);

}
