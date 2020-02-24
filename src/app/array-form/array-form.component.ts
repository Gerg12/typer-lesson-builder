import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  myForm: FormGroup;

  categories = [
    "general",
    "html-css"
  ];
  difficulties = [
    "easy",
    "medium",
    "hard"
  ];
  types = [
    "dom",
    "style"
  ];

  // Form state
  loading = false;
  success = false;
  

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: '',
      difficulty: '',
      category: '',
      hasCompleted: false,
      // phones: this.fb.array([]),
      steps: this.fb.array([])
    })

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  get stepForms() {
    return this.myForm.get('steps') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }

  addStep() {

    const steps = this.fb.group({ 
      type: [''],
      desc: [''],
      action: [],
      render: false
    })
    
    this.stepForms.push(steps);
  }

  // addAction() {

  //   const actions = this.fb.group({ 
  //     singleAction: ['']
  //   })

  //   console.log(this.stepForms);
  //   console.log(this.stepForms.value.action);

  //   this.stepForms.value.action.push(actions);
  // }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  deleteStep(i) {
    this.stepForms.removeAt(i)
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    console.log('submitted');

    try {
      await this.afs.collection('lessons').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
  }

}
