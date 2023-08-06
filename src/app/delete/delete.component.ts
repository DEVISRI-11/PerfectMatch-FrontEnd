import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allPerfects:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:4343/perfect/all");
    res.subscribe(
      data=>this.allPerfects=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:4343/perfect/delete?id="+id);
    res.subscribe(
      data=>this.allPerfects=data
    );
  }

}