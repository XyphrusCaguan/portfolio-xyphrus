import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
]
})
export class SideNavComponent {
  public show:boolean = false;
  public buttonName:any = '';
  state: string = 'default';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
    this.state = (this.state === 'default' ? 'rotated' : 'default'); //rotate button

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "";
    else
      this.buttonName = "";
  }
}
