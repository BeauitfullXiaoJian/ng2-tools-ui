import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    
    jsonClone(json: any): any {
        let temp: any = {}
        for (let key in json) {
            temp[key] = json[key]
        }
        return temp
    }
    
}
