import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../interfaces/Order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiURL: string = environment.API_URL;
  private apiURLOrder: string = `${this.apiURL}/orders`
  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.apiURLOrder);
  }
  

  createOrder(order: IOrder): Observable<IOrder>{
    return this.http.post<IOrder>(`${this.apiURLOrder}`, order);
  }
}
