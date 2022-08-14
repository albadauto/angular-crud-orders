import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOrder } from 'src/app/interfaces/Order.interface';
interface IStats{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-orders',
  templateUrl: './dialog-orders.component.html',
  styleUrls: ['./dialog-orders.component.css']
})

export class DialogOrdersComponent implements OnInit {
  
  formOrders!: FormGroup
  status: IStats[] = [
    { value: "preparando", viewValue: "Preparando"},
    { value: "pronto", viewValue: "Pronto"},
    { value: "caminho", viewValue: "A caminho"},
    { value: "cancelado", viewValue: "Cancelado"},
  ]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOrder ,
    private dialogRef: MatDialogRef<DialogOrdersComponent>, 
    ) {}

  ngOnInit(): void {
    this.formOrders = new FormGroup({
      order: new FormControl(''),
      extra: new FormControl(''),
      price: new FormControl(''),
      obs: new FormControl(''),
      status: new FormGroup(''),
      type: new FormControl('')
    })
  }

  handleSubmit(){
    console.log(this.formOrders.value);
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
