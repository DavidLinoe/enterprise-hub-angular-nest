import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/containers/navbar.component";
import { NavigationComponent } from "./layout/navigation/containers/navigation.component";
import { SidebarComponent } from "./layout/sidebar/containers/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NavigationComponent, SidebarComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('enterprise-hub-angular-nest');
}
