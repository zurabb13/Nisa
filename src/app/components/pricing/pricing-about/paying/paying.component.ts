import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.scss'],
})
export class PayingComponent {
  @Input() color = 'black';
  @Input() bg = 'white';
  @Input() price: number = 0;
  @Input() img: string = 'assets/img/pricing/pattern.svg';
  @Input() details?: string =
    'Add Soem details here to describe the type of plan and its particular benefits';
}
