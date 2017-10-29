import {Component, HostBinding, Input, OnInit} from '@angular/core';

export interface OfferCard {
  id: string | number;
  title: string;
  excerpt: string;
  totalBids: number;
  heighestBid: number;
  postedBy: string;
}

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() data: OfferCard;
  @Input() isRow = false;
  @HostBinding('class') className: string;

  constructor() {
  }

  ngOnInit() {
    this.className = this.isRow ? 'is-row' : '';
  }

}
