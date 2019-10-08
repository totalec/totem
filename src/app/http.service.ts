import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { toast } from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient, private router:Router) { }

  getDatos (usuario, psw){
    this.httpClient.get('https://basededatos-2127f.firebaseio.com/usuarios/'+usuario+'/password.json')
    .subscribe(response => {
        if (response == psw){
          localStorage.setItem('usuario', usuario);
          this.router.navigateByUrl('/main');
        }else{
          toast({
            html: 'Usuario o contraseña incorrecta',
            displayLength: 1000
          })
        }
    })
  }

}
