import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  public loginCredentials=[{ username: 'User', password: 'User' }];
  public reminders =[];

  public storeLoginDetails(cred:any):void{
    this.loginCredentials.push(cred);
  }

  public returnLoginCredentials():any{
    return this.loginCredentials;
  }

  public addReminder(reminder:any):void{
    this.reminders.push(reminder);
  }

  public fetchReminder():any{
    return this.reminders;
  }
}
