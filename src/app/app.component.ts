import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  url = '/server/api/readme';

  readme: any = [];
  show = false;

  constructor(private http: HttpClient) {
    console.log('-----> START <-----')
    this.fetchAll()
      .then(() => {
        this.show = true;
        console.log("this.show", this.show);
        console.log("this.readme", this.readme);
      })
      .catch((err) => {
        console.log("err", err)
        this.show = false;
      });
  }

  fetchAll() {
    return new Promise<void>(async (resolve, reject) => {
      try {
        let result = await this.http.get<any>(this.url);
        console.log('---> ',result);
        
        this.readme = result;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
