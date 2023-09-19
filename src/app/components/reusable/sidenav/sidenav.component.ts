import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent {
  public show:boolean = false;
  public buttonName:any = '';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "";
    else
      this.buttonName = "";
  }
}
