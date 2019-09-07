import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RefundPopupComponent} from '../refund-popup/refund-popup.component';
import { PremiumServicePopupComponent } from '../premium-service-popup/premium-service-popup.component';



@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent {
	customername = 'Tiger Nixon';
	customerimg = 'https://work.webdew.com/answergenie/agent/assets/media/users/default.jpg';

  constructor(public dialog: MatDialog) {}

  refund() {
    const dialogRef = this.dialog.open(RefundPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  premiumservice() {
    const dialogRef = this.dialog.open(PremiumServicePopupComponent);

    dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
     });
   }
}

// @Component({
//   selector: 'app-refund-popup',
//   templateUrl: './refund-popup.component.html',
// })
// export class RefundPopupComponent{}