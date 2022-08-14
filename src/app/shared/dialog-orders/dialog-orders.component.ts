import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private orderService: OrdersService
    ) {}

  ngOnInit(): void {
    this.formOrders = new FormGroup({
      order: new FormControl(''),
      extra: new FormControl(''),
      price: new FormControl(''),
      obs: new FormControl(''),
      status: new FormGroup(''),
    })
  }

  handleSubmit(){
    return this.orderService.createOrder(this.formOrders.value).subscribe(() => {
      console.log("Adicionado")
    })
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
