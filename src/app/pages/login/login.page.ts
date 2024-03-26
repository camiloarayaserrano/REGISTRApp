import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { alumno } from 'src/app/interfaces/midb';
import { ApiService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
/*
  genero user con usuario y password
*/
user={
  usuario:"",
  password:""
}
existe:any;
alumnos:alumno[]=[];
  constructor(private navCtrl: NavController, 
    private api: ApiService,
    private toastController: ToastController) { }
 ionViewWillEnter(){
  this.limpiar();
  this.getAlumnos();
 }
  ngOnInit() {    
  }
  ingresar(){
    
    for (let aux of this.alumnos) {
      console.log("userId: "+aux.userId);
      console.log("pass: "+aux.clave);
      if (aux.userId==this.user.usuario && aux.clave==this.user.password) {
    
        localStorage.setItem('ingresado','true');
        localStorage.setItem('usuario',aux.nombreAlumno);
        this.navCtrl.navigateRoot('/home');
        return;
      }            
    }
   
    
  }
  getAlumnos(){
    this.api.getAlumnos().subscribe((data)=>{
      console.log(data);
      this.alumnos.push(...data.alumnos);
    })
  }
  limpiar(){
    for(var [key,value] of Object.entries(this.user)){
      Object.defineProperty(this.user,key,{value:""})
    }
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}

