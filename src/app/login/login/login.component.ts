import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:string;
  password:string;
  date:number;
  constructor(private http: HttpClient,  private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.date=0;
      const t= new Date();
      this.date=+localStorage.getItem('date');
      if(t.getTime()-this.date>1800000){
        localStorage.removeItem('date');
        localStorage.removeItem('token');
      }
      else{
        this.router.navigate(['map']);
      }
    }
  }
 sigin(){
  if(this.login==null||this.password==null||this.login==""||this.password==""){
    this.alert('Błąd logowania, wprowadź login i hasło');
    return;
  }
  this.http.post<any>("http://goodwire.cba.pl/api/login",{email:this.login,password:this.password})
  .subscribe(e=>{
    const t= new Date();
    localStorage.setItem('token',e.token);
    localStorage.setItem('date',t.getTime().toString());
    this.router.navigate(['map']);
  },error=>{ this.alert('Błąd logowania, zły login lub hasło');}
  );

 }

 alert(msg :string) {
  this._snackBar.open(msg,'', {
    duration: 6000,
    verticalPosition: 'bottom',
      horizontalPosition: 'start',
    panelClass: ['alert-waring'],
  });
}

}
