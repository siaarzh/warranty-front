import { Component, OnInit } from '@angular/core';
import { WarrantyService } from '../warranty.service';
import { Warranty } from '../warranty.model';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.sass'],
})
export class WarrantyListComponent implements OnInit {
  warranties: Warranty[];

  constructor(private warrantyService: WarrantyService) {}

  ngOnInit(): void {
    this.warranties = this.warrantyService.getWarranties();
  }
}
