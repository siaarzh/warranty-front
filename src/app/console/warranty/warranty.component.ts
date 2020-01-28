import { Component, OnInit } from '@angular/core';
import { Warranty } from './warranty.model';
import { WarrantyService } from './warranty.service';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.sass'],
})
export class WarrantyComponent implements OnInit {
  warranties: Warranty[] = [];

  constructor(private warrantyService: WarrantyService) {}

  ngOnInit(): void {
    this.warranties = this.warrantyService.getWarranties();
  }
}
