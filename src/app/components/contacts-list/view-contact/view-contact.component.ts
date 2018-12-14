import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  @ViewChild('viewContactModel') modal: ElementRef;
  modalInstance;
  contact;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.modalInstance = M.Modal.init(this.modal.nativeElement);
  }

  openModal(contact) {
    this.contact = contact;
    this.modalInstance.open();
  }

  closeModal() {
    this.modalInstance.close();
  }

}
