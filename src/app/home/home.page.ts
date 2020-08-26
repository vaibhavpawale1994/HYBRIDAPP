import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public today : number  = Date.now();

  firstname: string;
  lastname: string;
  message: string;
  constructor(public authservice: AuthService, public toastController: ToastController,private iab: InAppBrowser) {}

  async crateRecord(){
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
    let Record = {};
    Record['fName']= this.firstname;
    Record['lName']= this.lastname;

    this.authservice.create_Newstudent(Record).then(res =>{
      this.firstname = "";
      this.lastname = "";
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

  }
  openBlank(){
    this.iab.create('https://console.firebase.google.com' ,'_blank');
  }

  

}
