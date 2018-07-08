import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Appliance } from './appliance';
import { Comment } from './comment';
import { Category } from './category';
import { State } from './state';

@Injectable({ providedIn: 'root' })
export class ApplianceService {

    private applaianceUrl = 'api/appliances/';  // URL to web api
    private commentsUrl = '/comment';  // URL to web api

    private categoriesUrl = 'api/categories';  // URL to web api

    constructor(private http: HttpClient) { }

    getAppliances (): Observable<Appliance[]> {
        return this.http.get<Appliance[]>(this.applaianceUrl);
    }

    getCategories (): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl);
    }

    sendComment(commentText: string, appliance: Appliance) {
        let comment = new Comment(commentText);
        return this.http.post(this.applaianceUrl + appliance.id + this.commentsUrl, comment);
    }

    delete(appliance: Appliance) {
        return this.http.delete(this.applaianceUrl + appliance.id);
    }

    register(applianace: Appliance) {
        return this.http.post(this.applaianceUrl, applianace);
    }

    updateState(appliance: Appliance, state: State) {
        return this.http.patch(this.applaianceUrl + appliance.id, state);
    }
}