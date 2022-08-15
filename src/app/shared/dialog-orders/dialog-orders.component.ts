import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/interfaces/Order.interface';
import { OrdersService } from 'src/app/services/orders.service';
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
  isUpdated!: boolean
  formOrders!: FormGroup;
  status: IStats[] = [
    { value: "preparando", viewValue: "Preparando"},
    { value: "pronto", viewValue: "Pronto"},
    { value: "caminho", viewValue: "A caminho"},
    { value: "cancelado", viewValue: "Cancelado"},
  ]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOrder ,
    private dialogRef: MatDialogRef<DialogOrdersComponent>, 
    private orderService: OrdersService,
    ) {}

  ngOnInit(): void {
    this.formOrders = new FormGroup({
      id_order: new FormControl(''),
      order: new FormControl(''),
      extra: new FormControl(''),
      price: new FormControl(''),
      obs: new FormControl(''),
      status: new FormControl(''),
    })

    if(this.data.order !== ""){
      this.isUpdated = true;
    }else{
      this.isUpdated = false;
    }
  }

  handleSubmit(){
    return this.orderService.createOrder(this.formOrders.value).subscribe({
      complete: () =>{
        location.reload();
      }
    })
  }
  closeDialog(){
    this.dialogRef.close();
  }

  handleUpdate(){
    return this.orderService.updateOrder(this.data.id_order, this.data).subscribe(() => {
      console.log("Update feito")
    })
  }

}
