import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
	@HostListener ('mouseenter',['$event'])
	onMove(event:MouseEvent){


	} 
}
