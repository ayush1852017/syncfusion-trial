import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public queueApi = 'http://localhost:8080/queue';
  public progressApi = 'http://localhost:8080/progress';
  public processedApi = 'http://localhost:8080/processed';
  public approvedApi = 'http://localhost:8080/approved';
  public cancelledApi = 'http://localhost:8080/cancelled';
  public commentApi = 'http://localhost:8080/comments';

  constructor(private http: HttpClient) {}
  getQueueData() {
    return this.http.get<any>(`${this.queueApi}`);
  }
  getProgressData() {
    return this.http.get<any>(`${this.progressApi}`);
  }
  getProcessedData() {
    return this.http.get<any>(`${this.processedApi}`);
  }
  getApprovedData() {
    return this.http.get<any>(`${this.approvedApi}`);
  }
  getCancelledData() {
    return this.http.get<any>(`${this.cancelledApi}`);
  }
  getComments() {
    return this.http.get<any>(`${this.commentApi}`);
  }
  postComments(data: any) {
    return this.http.post<any>(`${this.commentApi}`, data);
  }
  addQueue(data: any) {
    return this.http.post<any>(`${this.queueApi}`, data);
  }
  updateRecord(data: any, id: number) {
    return this.http.post<any>(`${this.queueApi}/${id}`, data);
  }
}
