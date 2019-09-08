import { Injectable } from '@angular/core';

import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  create(category: Category) {
    throw new Error('Method not implemented.');
  }

  private apiPath: string = 'api/categories'

  constructor(private http: HttpClient) { }

    }

  //PRIVATE METHODS

  private jsonDataToCategories(jsonData: any[]): Category[]{
    const categories: Category[] =[];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category{
    return jsonData as Category;
  }

  // tslint:disable-next-line: no-unused-expression
  private handleError(error: any): Observable<any>{
    console.log('ERRO NA REQUISIÇÃO => ', error );
    return throwError(error);
  }
  
}
