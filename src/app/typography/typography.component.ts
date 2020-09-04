import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {AngularFireStorage, AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import{ VideosService} from '../services/videos/videos.service';
import{Router} from '@angular/router';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { finalize } from 'rxjs/operators/finalize';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  providers: [DatePipe]
})
export class TypographyComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;
  
  uploadProgress:Observable<number>
  downloadURL:Observable<string>
  snapshot:any
  message:string;
  uploadState: Observable<string>;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  uploadedFilePath: string = null;
  public VideosForm :FormGroup;
  submitted = false;
  uploadForm: FormGroup;
  imageURL: string;
  AddVideo=false;
  createVideo=false;
  dataSource = []; 
  newdataSource=[];
  newurl:string;
  title:string;
  date : String;
  myDate=new Date();
 constructor(public fb: FormBuilder,private afStorage: AngularFireStorage,private datePipe: DatePipe,private videoService:VideosService, private router:Router) {
   // Reactive Form
 
   this.date= this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   console.log(this.date);
   
   this.uploadForm = this.fb.group({
     avatar: [null],
     name: ['']
   })
 }


 ngOnInit(): void {
  this.VideosForm = new FormGroup({
    title: new FormControl('',Validators.required)
    
  })
  }
  showCreateVideoDiv()
  {
    
    this.AddVideo=true;
    this.downloadURL=null;
    this.dataSource.push(this.dataSource.length);
    console.log(this.AddVideo);
  }
 get f() {
  return this.VideosForm.controls;
}

createViideoData(divData,title)
{
  
  this.submitted=true
  this.title=this.VideosForm.controls.title.value;
  console.log(this.submitted);
  if (this.VideosForm.invalid) {
    console.log("Form invalid")
    return;
  }
   let index=this.dataSource.indexOf(divData);
  console.log(index);
  if(this.message=="File uploaded successfully")
  {
    console.log("File uploaded successfully");
    let payload={
      name: this.VideosForm.controls.title.value,
      link: this.newurl,
      date:this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
      

     
    }
    this.videoService.create(payload).subscribe(
      res=>{
        this.router.navigate(['/typography']);
        console.log(res);
      },
      err=>{
        console.log(err);
      });
    console.log(payload);
  }
  else{
    console.log("File is uploadng");
  }
  /*let index=this.dataSource.indexOf(divData);
  console.log(index);
  this.dataSource.splice(index,1);
  this.createVideo=true
  this.newdataSource.push(this.newdataSource.length);
  */
  
  
  
}
signin(){
  this.submitted=true
  if (this.VideosForm.invalid) {
    return;
}
console.log("I am here");
}
showUpdateDiv()
{
  this.newdataSource.pop();
  this.dataSource.push(this.dataSource.length);

}
deletVideo(divData)
{ let index=this.newdataSource.indexOf(divData);
  console.log(index);
  this.newdataSource.splice(index,1);
  this.newdataSource.pop();
}
 // Image Preview
 showPreview(event) {
  console.log('I am here');
   const file = (event.target as HTMLInputElement).files[0];
   const id=Math.random().toString(36).substring(2);
   //console.log(this.title.textContent);
   this.ref=this.afStorage.ref(id);
   this.task=this.ref.put(file)
   this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state,
    
    ));
    this.uploadProgress=this.task.percentageChanges();
   this.snapshot = this.task.snapshotChanges().pipe(
      finalize(()=>{
        console.log(this.message);
        if(this.message)
        {
          this.ref.getDownloadURL().subscribe(url=>{
            this.newurl=url;
            console.log("Url is"+url);
            
  
           },err => {
            console.log(err);
          });
          
        }
        })); 
       /* if(this.message)
        {
          console.log("here to get url")
          this.downloadURL.subscribe( url => {
            this.newurl=url;
            console.log("Url is"+url);
          }, err => {
            console.log(err);
          }
        );
        }
        */
        
      this.snapshot.subscribe(
       res => {
         this.message="File uploaded successfully";
         console.log(res);
       }, err => {
         console.log(err);
       }
     );

    
  

  
 
   



  
   }
  
   
 }


 


