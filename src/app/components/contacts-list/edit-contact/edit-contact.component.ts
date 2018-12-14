import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, AfterViewInit {
  @ViewChild('editContactModal') modal: ElementRef;
  modalInstance;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.modalInstance = M.Modal.init(this.modal.nativeElement);
  }

  openModal() {
    this.modalInstance.open();
  }

  closeModal() {
    this.modalInstance.close();
  }

}
