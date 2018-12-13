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
    // this.modal.nativeElement.style.display = "block";
    this.modalInstance.open();
  }

  closeModal() {
    // this.modal.nativeElement.style.display = "none"
    this.modalInstance.close();
  }

}
// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
