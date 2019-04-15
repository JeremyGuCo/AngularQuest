import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { minDateValidator } from './ min-date.validator';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm.valueChanges
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }

  addPayments() {
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator]],
      amount: ['', Validators.required]
    });
    const payments = this.orderForm.get('payments') as FormArray;
    payments.push(paymentForm);
  }

  get payments(): FormArray {
    return this.orderForm.get('payments') as FormArray;
  }

  onSubmit() {
    console.log('oderForm submitted : ', this.orderForm.value);
  }
}
