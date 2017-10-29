import {OfferCard} from '../../components/offer-card/offer-card.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public offers: OfferCard[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.offers.push({
        id: i,
        postedBy: 'John Doe',
        title: 'Ut aliquip ullamco in eiusmod nisi tempor nisi enim occaecat ipsum occaecat veniam.',
        excerpt: 'Proident aliquip minim cupidatat officia cillum veniam laboris non ea irure fugiat magna.',
        totalBids: 397,
        heighestBid: 3767
      });
    }
  }

}
