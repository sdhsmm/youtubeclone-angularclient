import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideolistService {


  constructor(private client:HttpClient) { 
    
  }

  ngOnInit(): void {
    
  }

getAllMedia(){
    return this.client.get("http://localhost:8080/media");
}

}
