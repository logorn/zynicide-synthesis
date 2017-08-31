import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
	context: Observable<any>

    constructor(
    	private http: Http
    ) {
        this.context = this.http.get('/context/')
            .map((response: Response) => {
                return response.json();
            })
            .catch((error) => {
                return 'error!';
            })
            .publishReplay()
            .refCount();
    }

}
