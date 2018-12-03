import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: [
    "./star.component.css",
    "../contacts-list/contacts-list.component.css"
  ]
})
export class StarComponent implements OnInit, OnChanges {
  @Input("contactId") contactId;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    // console.log(this.contactId);
  }

  onBookmark() {
    console.log(`Bookmarked contact ${this.contactId}`);
  }
}
