import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  itemType: any;
  route: any;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.itemType = this.route.snapshot.params['itemType'];
  }

}
