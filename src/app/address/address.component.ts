
import { Component,OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import{AuthorizationService} from '../services/authorization/authorization.service';
import {ActivatedRoute,Router} from '@angular/router';
declare var google:any;
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;
  private email;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  public origin:any;
  public destination:any;
  public signinForm:FormGroup;
  submitted = false;

  constructor( private router:ActivatedRoute, private signinService:AuthorizationService,private route:Router,

    private ngZone: NgZone) { }

    // ngOnInit() {
    //   this.mapsAPILoader.load().then(() => {
    //     //this.setCurrentLocation();
    //     this.geoCoder = new google.maps.Geocoder;
    //     // console.log(google.maps.places)
    //     // let pickUp = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    //     // pickUp.addListener("place_changed", () => {
    //     //   this.ngZone.run(() => {
    //     //     //get the place result
    //     //     let place: google.maps.places.PlaceResult = pickUp.getPlace();
   
    //     //     //verify result
    //     //     if (place.geometry === undefined || place.geometry === null) {
    //     //       return;
    //     //     }
   
    //     //     //set latitude, longitude and zoom
    //     //     this.latitude = place.geometry.location.lat();
    //     //     this.longitude = place.geometry.location.lng();
    //     //     this.zoom = 12;
    //     //   });
    //     });
    //   //});
      
    //  this.getDirection();
    // }
    // getDirection() {
    //   this.origin = { lat: 24.8024, lng: 67.0298 };
    //   this.destination = { lat: 24.8237, lng: 67.0358 };
     
      
    // }
    // showlink(){
      
    // }
    // private setCurrentLocation() {
    //   if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       this.latitude = position.coords.latitude;
    //       this.longitude = position.coords.longitude;
    //       this.zoom = 15;
    //     });
    //   }
    // }
    // markerDragEnd($event: MouseEvent) {
    //   console.log($event);
    //   this.latitude = $event.coords.lat;
    //   this.longitude = $event.coords.lng;
    //   this.getAddress(this.latitude, this.longitude);
    // }
   
    // getAddress(latitude, longitude) {
    //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
    //     console.log(results);
    //     console.log(status);
    //     if (status === 'OK') {
    //       if (results[0]) {
    //         this.zoom = 12;
    //         this.address = results[0].formatted_address;
    //       } else {
    //         window.alert('No results found');
    //       }
    //     } else {
    //       window.alert('Geocoder failed due to: ' + status);
    //     }
   
    //   });
    // }
  

    ngOnInit() {
       this.email=this.router.snapshot.paramMap.get('userEmail')
    


       this.signinForm = new FormGroup({
       email: new FormControl('',
          Validators.required),
        password: new FormControl('',Validators.required)
      });
    }
    get f() {
      return this.signinForm.controls;
    }
  
    signin(){
      this.submitted=true
      console.log("Here");
      if (this.signinForm.invalid) {
        return;
    }
  
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value))
  
     
      let payload = {
        email:this.email,
        latitude: this.signinForm.controls.email.value,
        longitude: this.signinForm.controls.password.value
      }
      
       
      this.signinService.addressCreate(payload).subscribe(res=>{
        
          this.route.navigate(['/pligim']);
          console.log(res);
        },
      
      err=>{
        console.log(err);
      });
      console.log("signin payload:",payload);
      
    }
}