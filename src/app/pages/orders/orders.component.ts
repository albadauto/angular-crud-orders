import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOrder } from 'src/app/interfaces/Order.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { DialogOrdersComponent } from 'src/app/shared/dialog-orders/dialog-orders.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'editar/excluir'];
  dataSource: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  orderData!: IOrder[]
  constructor(private orderService: OrdersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orderData = res
      console.log(this.orderData)
    });
  }
  openDialog():void {
    this.dialog.open(DialogOrdersComponent, {
      width: '350px',
    })
  }

}
