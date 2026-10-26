import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive,RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
	loginState=signal(false);
	toggleLoginState() {
		this.loginState.set(!this.loginState());
	}
	sideNabarState=signal(false);
	toggleSideNavbarState() {
		this.sideNabarState.set(!this.sideNabarState());
	}
}
