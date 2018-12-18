import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import { NgForm } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, AfterViewInit {
  @ViewChild('editContactModal') modal: ElementRef;
  @ViewChild('EditContactForm') EditContactForm: NgForm;
  modalInstance;
  previousContactData;
  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.modalInstance = M.Modal.init(this.modal.nativeElement, {
      onCloseEnd: () => {
        this.previousContactData = null;
        const previousValidElements = document.querySelectorAll(".valid");
        if (previousValidElements) {
          Array.from(previousValidElements).forEach(ele => ele.classList.remove("valid"))
        }
      }
    });
  }

  openModal(previousContactData) {
    this.previousContactData = previousContactData;
    console.log("opening edit modal");
    console.log(this.previousContactData);
    this.EditContactForm.setValue({
      firstName: previousContactData.firstName,
      lastName: previousContactData.lastName ? previousContactData.lastName : "",
      email: previousContactData.email ? previousContactData.email : "",
      job: previousContactData.job ? previousContactData.job : "",
      company: previousContactData.company ? previousContactData.company : "",
      notes: previousContactData.notes ? previousContactData.notes : "",
      phoneNumber: previousContactData.phoneNumber ? previousContactData.phoneNumber : "",
    });
    M.updateTextFields();
    this.modalInstance.open();
  }

  closeModal() {
    this.modalInstance.close();
  }

  updateContact() {
    const updatedContactData = this.EditContactForm.value;
    console.log(updatedContactData);
    this
      .contactService
      .updateContact(this.previousContactData._id, updatedContactData)
      .subscribe(response => {
        console.log("response from server on update request");
        console.log(response);
        if (response.status == false) {
          alert(response.error);
          this.closeModal();
          return;
        }
        this.contactService.updateContactLocal(response.contact);
        // alert("contact updated successfully");
        this.closeModal();
      })
  }

}
