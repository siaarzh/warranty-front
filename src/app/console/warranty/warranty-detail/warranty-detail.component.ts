import { Component, OnInit } from '@angular/core';
import { WarrantyService } from '../warranty.service';
import { Warranty } from '../warranty.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-warranty-detail',
  templateUrl: './warranty-detail.component.html',
  styleUrls: ['./warranty-detail.component.sass'],
})
export class WarrantyDetailComponent implements OnInit {
  warranty: Warranty;
  warrantyIndex: number;

  constructor(private warrantyService: WarrantyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.warrantyIndex = +params.id;
      this.warranty = this.warrantyService.getWarranty(this.warrantyIndex);
    });
  }
}
