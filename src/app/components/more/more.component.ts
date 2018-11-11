import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "app-more",
  templateUrl: "./more.component.html",
  styleUrls: ["./more.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MoreComponent implements OnInit {
  @Input("contactId") contactId;

  moreOptionsDropdown: HTMLElement;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  onMoreOptions(event) {
    console.dir(event.currentTarget);
    // console.log(event.currentTarget.offsetTop, event.currentTarget.offsetLeft);
    const ele: HTMLElement = document.querySelector(".more-options");
    if (ele) {
      ele.classList.remove("show");
    }
    ele.classList.add("show");
    ele.style.top = `${event.currentTarget.offsetTop +
      event.currentTarget.offsetHeight / 2}px`;
    console.log(ele, ele.offsetWidth);
    ele.style.left = `${event.currentTarget.offsetLeft -
      ele.offsetWidth / 2}px`;
    event.stopPropagation();
    console.log(`More options for contact ${this.contactId}`);
  }
}
