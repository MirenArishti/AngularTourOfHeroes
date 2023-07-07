import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-array-implementation',
  templateUrl: './forms-array-implementation.component.html',
  styleUrls: ['./forms-array-implementation.component.css']
})
export class FormsArrayImplementationComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Ramlal',
      address: {
        street: 'Vakhariya Road'
      }
    });
  }
}
