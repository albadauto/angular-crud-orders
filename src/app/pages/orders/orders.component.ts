import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IOrder } from 'src/app/interfaces/Order.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { DialogOrdersComponent } from 'src/app/shared/dialog-orders/dialog-orders.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['order', 'extra', 'price', 'obs', 'status' ,'editar/excluir'];
  orderData: IOrder[] = []
  constructor(private orderService: OrdersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.orderService.getAllOrders().subscribe((res: any) => {
      this.orderData = res.result
    });
  }
  
  openDialog(order: IOrder | null):void {
    this.dialog.open(DialogOrdersComponent, {
      width: '350px',
      data: order === null ?{
        order: '',
        extra: '',
        price: 0,
        obs: '',
        status: '',
      }: order
    })
  }

  edit(order: IOrder){
    this.openDialog(order);
  }


  deleteOrder(id: number){
    return this.orderService.deleteOrder(id).subscribe(() => {
      this.loadData();
    })
  }
  

}
