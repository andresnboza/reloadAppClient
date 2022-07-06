import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  url = '/api2/api/readme';
  // url = 'http://localhost:3000/api/readme';

  readmes: any = [];
  show = false;

  constructor(private http: HttpClient) {
    this.fetchAll()
      .then(() => {
        this.show = true;
      })
      .catch((err) => {
        this.show = false;
      });
  }

  fetchAll() {
    return new Promise<void>(async (resolve, reject) => {
      try {
        this.http.get<any>(this.url).subscribe((result) => {
          //console.log('data ---> ', result.data);
          this.readmes = result.data;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
