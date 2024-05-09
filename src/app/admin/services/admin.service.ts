import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public user_url = "https://fakestoreapi.com/users/";
  public product_url = "https://fakestoreapi.com/products/";
  public all_product_url = "https://fakestoreapi.com/products";
  public all_user_url = "https://fakestoreapi.com/user";


  constructor(private api: ApiService) { }

  userDashboardData() {
    return this.api.get(this.user_url);
  }

  productDashboardData() {
    return this.api.get(this.product_url);
  }
  
  allUser() {
    return this.api.get(this.all_user_url);
  }

  allProduct() {
    return this.api.get(this.all_product_url);
  }

  productById(product_id: any) {
    return this.api.get(this.product_url, product_id);
  }

}
