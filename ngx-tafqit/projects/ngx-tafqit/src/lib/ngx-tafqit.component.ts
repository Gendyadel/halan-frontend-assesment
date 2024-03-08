import { Component, Input } from '@angular/core';
import { NgxTafqitService } from './ngx-tafqit.service';

@Component({
  selector: 'ngx-tafqit',
  standalone: true,
  imports: [],
  template: `
    <p>
    Output: {{output}}
    </p>
  `,
  styles: ``
})
export class NgxTafqitComponent {
  @Input() number?: number;
  constructor(private tafqitService: NgxTafqitService) { }
  get output() {
    if (this.number) {
      return this.tafqitService.tafqit(this.number);
    } else {
      return ''
    }
  }
}
