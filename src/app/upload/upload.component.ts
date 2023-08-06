import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  dob:string="";
  gender:string="";
  qualification:string="";
  height:string="";
  address:string="";
  phone:string="";
  caste:string="";
  


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("dob",this.dob);
    uploadImageData.append("gender",this.gender);
    uploadImageData.append("qualification",this.qualification);
    uploadImageData.append("height",this.height);
    uploadImageData.append("address",this.address);
    uploadImageData.append("phone",this.phone);
    uploadImageData.append("caste",this.caste);
    
    
    

    let res =this.http.post("http://localhost:4343/perfect/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.dob="";
        this.gender="";
        this.qualification="";
        this.height="";
        this.address="";
        this.phone="";
        this.caste="";
        
      }
    );

  }

}