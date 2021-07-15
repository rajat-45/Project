import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {

  
  ngOnInit(): void {
  }
  deviceInfo : any;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://10.0.0.4:4200/home';

  constructor(private deviceService: DeviceDetectorService, private router: Router){
    this.epicFunction();
  }

  epicFunction() {
    const isMobile = this.deviceService.isMobile();
    console.log(isMobile);
    if(isMobile==true){
      this.router.navigate(['login'])
    }
     else{
       this.router.navigate(['login'])
     }
    
  }
}
