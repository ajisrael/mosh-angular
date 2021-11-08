import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: String, private http: HttpClient) {}

  getAll() {
    // example of map():
    // needed to change response to full http response instead of body
    // so that map() had purpose and wasn't just map(response=>response)
    return this.http.get(this.url.toString(),{observe:'response'}).pipe(
      map(response=>response.body as object[]),
      catchError(this.handleError)
    );
  }

  create(resource: any) {
    return this.http
      .post(this.url.toString(), JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    } else if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
