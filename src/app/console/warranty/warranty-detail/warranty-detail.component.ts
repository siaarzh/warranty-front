import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WarrantyService } from '../warranty.service';

import { Warranty } from '../warranty.model';

@Component({
  selector: 'app-warranty-detail',
  templateUrl: './warranty-detail.component.html',
  styleUrls: ['./warranty-detail.component.sass'],
})
export class WarrantyDetailComponent implements OnInit {
  warranty: Warranty;
  warrantyUUID: string;

  constructor(private warrantyService: WarrantyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.warrantyUUID = params.id;
      this.warranty = this.warrantyService.getWarranty(this.warrantyUUID);
    });
  }
}
