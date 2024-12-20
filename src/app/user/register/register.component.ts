import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { TuiButton, TuiIcon, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    TuiIcon,
    TuiButton,
    TuiPassword,
    TuiTextfield,
    TuiCardLarge,
    RouterLink,
    TuiLink
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.less'
})
export class RegisterComponent {
  protected readonly userService = inject(UserService);

}
