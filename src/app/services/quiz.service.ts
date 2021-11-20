import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JAVASCRIPT } from '../../data/javascript.data';

@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}

  get(type: string): any {
    let data: any;
    switch (type) {
      case 'javascript':
        return JAVASCRIPT;
    }
  }

  getAll() {
    return [{ id: 'javascript', name: 'JavaScript' }];
  }
}
