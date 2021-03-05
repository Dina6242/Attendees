import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss'],
})
export class AttendeesComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: '',
      phone: '',
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }


  addCreds(): void {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      other: '',
    }));
  }

  onSubmit(): void {
    console.log(this.form);
  }

}
