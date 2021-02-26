import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  formationForm: FormGroup;
  constructor (private router: Router) { }

  ngOnInit(): void {
    this.formationForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      titre: new FormControl("", [Validators.required, Validators.minLength(5)]),
      lieu: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      DateDeb: new FormControl("", [
        Validators.required,
      ]),
      DateFin: new FormControl("", [
        Validators.required,
      ]),
    });
  }

  
  onSubmit(): void {
   
  }
}
