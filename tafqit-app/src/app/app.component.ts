import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxTafqitComponent, NgxTafqitService } from '../../../ngx-tafqit/projects/ngx-tafqit/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxTafqitComponent, FormsModule],
  providers: [NgxTafqitService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputNumber?: number = 23980;
} 
