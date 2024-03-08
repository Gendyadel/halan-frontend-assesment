import { Component, Input } from '@angular/core';
import { NgxTafqitService } from './ngx-tafqit.service';

@Component({
  selector: 'lib-ngx-tafqit',
  template: `
    <p>
      Output: {{output}}
    </p>
  `,
  styles: [
  ]
})
export class NgxTafqitComponent {
  @Input() num?: number;
  get output() {
    if (this.num) {
      return this.tafqitService.tafqit(this.num);
    } else {
      return ''
    }
  }
  constructor(private tafqitService: NgxTafqitService) { }

}
