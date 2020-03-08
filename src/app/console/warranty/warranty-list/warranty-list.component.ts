import { Component, OnInit } from '@angular/core';
import { WarrantyService } from '../warranty.service';
import { Warranty } from '../warranty.model';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['../../../shared/item-lists.sass', './warranty-list.component.sass'],
})
export class WarrantyListComponent implements OnInit {
  category: string;
  warranties: Warranty[];

  constructor(private warrantyService: WarrantyService) {}

  ngOnInit(): void {
    this.category = 'Все гарантии';
    this.warranties = this.warrantyService.getWarranties();
  }
}
