import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LEWLite.tech5.ai';
}

