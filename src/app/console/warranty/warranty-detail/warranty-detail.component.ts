import { Component, OnInit } from '@angular/core';
import { WarrantyService } from '../warranty.service';
import { Warranty } from '../warranty.model';

@Component({
  selector: 'app-warranty-detail',
  templateUrl: './warranty-detail.component.html',
  styleUrls: ['./warranty-detail.component.sass'],
})
export class WarrantyDetailComponent implements OnInit {
  warranty: Warranty;
  constructor(private wrntSrvc: WarrantyService) {}

  ngOnInit(): void {
    this.warranty = this.wrntSrvc.getWarranties()[0];
  }
}
