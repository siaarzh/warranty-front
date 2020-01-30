import { Component, Input } from '@angular/core';
import { Warranty } from '../../warranty.model';

@Component({
  selector: 'app-warranty-item',
  templateUrl: './warranty-item.component.html',
  styleUrls: ['./warranty-item.component.sass'],
})
export class WarrantyItemComponent {
  @Input() warranty: Warranty;
  @Input() warrantyUUID: string;
}
