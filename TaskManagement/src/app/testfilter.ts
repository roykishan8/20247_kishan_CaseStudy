import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Product } from './Product';


@Pipe({
  name: 'customerEmailFilter'
})
@Injectable()
export class CustomerEmailFilter implements PipeTransform {
  transform(customers: Product[], args: any[]): any {
    return customers.filter(customer => customer.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}