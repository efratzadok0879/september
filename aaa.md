```typescript
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { asEnumerable } from 'linq-es2015';
import { Giving, Request, Address, ExchangingApartmentService, GivingApartmentDetailsComponent } from '../../imports';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

    givings: Giving[];
    apartmentsGroups: any[] = [];
    request: Request;
    state: string;
    distance: number = 0;
    isCity: boolean = false;

    //for google map with markers of all apartments
    addresses: Address[] = [];

    constructor(private exchangingApartmentService: ExchangingApartmentService, private dialogService: DialogService) {
        this.request = new Request();
    }

    ngOnInit() {
        this.exchangingApartmentService.getAllGivings()
            .subscribe(
                (givings: Giving[]) => {
                    this.givings = givings;
                    this.apartmentsGroups = asEnumerable(this.givings).GroupBy(x => x.apartmentId, x => x, (key, value) => { return { ApartmentId: key, Givings: asEnumerable(value).OrderBy(x => x.fromDate).ToArray() } }).ToArray();
                    this.addresses = this.apartmentsGroups.map(group => group.Givings[0].apartment.address);

                },
                err => { alert(err.error.message); }
            );
    }

    requestEvent(value: any): void {
        let request: Request = JSON.parse(JSON.stringify(value.request));
        if (request.fromDate) {
            request.fromDate = new Date(request.fromDate);
            request.tillDate = new Date(request.tillDate);
        }
        this.request = request;
        this.distance = value.distance;
        this.isCity = value.isCity;
    }

    openRequestForm() {
        this.state = "in";
    }
    closeRequestForm() {
        this.state = "out"
    }
    showDetails(apartmentId: number) {
        let disposable = this.dialogService.addDialog(GivingApartmentDetailsComponent, {
            givings: this.apartmentsGroups.find(group => group.ApartmentId == apartmentId).Givings
        }).subscribe(() => { });

    }
}
```