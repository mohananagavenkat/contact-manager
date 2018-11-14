import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenavContainer")
  sidenavContainer: ElementRef;
  @ViewChild("sidenav")
  sidenav: ElementRef;

  navlinks: NavLinks[] = [
    {
      name: "create contact",
      link: ["/", "newcontact"],
      icon: "person_add"
    },
    {
      name: "profile",
      link: ["/", "profile"],
      icon: "person"
    },
    {
      name: "contacts",
      link: ["/", "contacts"],
      icon: "contacts"
    },
    {
      name: "labels",
      link: ["/", "labels"],
      icon: "label"
    },
    {
      name: "print",
      link: ["/", "print"],
      icon: "print"
    },
    {
      name: "download",
      link: ["/", "download"],
      icon: "cloud_download"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const mynav = document.querySelector(".mynav");
    mynav.addEventListener("click", event => {
      if ((<HTMLElement>event.target).nodeName == "A") {
        console.log(this);
        this.hideSidenav();
      }
    });
  }

  showSidenav() {
    console.log("showing sidenav");
    this.sidenav.nativeElement.classList.add("visible");
    this.sidenavContainer.nativeElement.classList.add("visible");
    this.sidenav.nativeElement.classList.add("sidenav-animatable");
  }

  hideSidenav() {
    console.log("hiding sidenav");
    this.sidenav.nativeElement.classList.remove("visible");
    this.sidenavContainer.nativeElement.classList.remove("visible");
  }

  handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      this.hideSidenav();
    }
  }
}

interface NavLinks {
  name: string;
  link: any[];
  icon: string;
}
