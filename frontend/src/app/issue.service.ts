import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/itemList`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/itemList/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      name: title,
      // responsible: responsible,
      // description: description,
      // severity: severity
    };
    return this.http.post(`${this.uri}/itemList/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/itemList/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/itemList/delete/${id}`);
  }
}
