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
  id;

  moreOptionsDropdown: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.moreOptionsDropdown = document.createElement("UL");
    this.updateMoreOptionsHtml(this.id);
    this.moreOptionsDropdown.classList.add("more-options");
    this.moreOptionsDropdown.addEventListener("click", event => {
      const ele = <HTMLElement>event.target;
      if (ele.className == "option1") {
        console.log("option1 clicked for " + this.id);
      } else if (ele.className == "option2") {
        console.log("option2 clicked for " + this.id);
      } else if (ele.className == "option3") {
        console.log("option3 clicked for " + this.id);
      }
      this.moreOptionsDropdown.classList.remove("show");
      event.stopPropagation();
    });
  }

  ngOnChanges() {
    this.id = this.contactId;
  }

  onMoreOptions(event) {
    //console.dir(event.currentTarget);
    // console.log(event.currentTarget.offsetTop, event.currentTarget.offsetLeft);
    let ele: HTMLElement = document.querySelector(".more-options");
    if (ele) {
      ele.parentElement.removeChild(ele);
    }
    this.updateMoreOptionsHtml(event.currentTarget.dataset.contactId);
    document.body.appendChild(this.moreOptionsDropdown);
    ele = document.querySelector(".more-options");
    ele.classList.add("show");
    ele.style.top = `${event.currentTarget.offsetTop +
      event.currentTarget.offsetHeight / 2}px`;
    //console.log(ele, ele.offsetWidth);
    ele.style.left = `${event.currentTarget.offsetLeft -
      ele.offsetWidth / 2}px`;
    event.stopPropagation();
    console.log(`More options for contact ${this.id}`);
  }

  updateMoreOptionsHtml(contactId) {
    this.moreOptionsDropdown.innerHTML = `
      <li><a data-contact-id="${this.id}" class="option1" > Option1 </a></li >
      <li><a data-contact-id="${this.id}" class="option2" > Option2 </a></li >
      <li><a data-contact-id="${this.id}" class="option3" > Option3 </a></li >
    `;
  }
}
