import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Reminder } from '../reminder-model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayAddReminder: boolean = true;
  public message: any;
  public time: Time;
  public date: Date;
  public getReminders: any;

  constructor(
    public loginService: LoginServiceService
  ) { }

  ngOnInit(): void {
  }

  public addReminder(): void {
    this.displayAddReminder = true;
  }
  public viewReminder(): void {
    this.displayAddReminder = false;
    this.getReminders = this.loginService.fetchReminder();
  }

  public addReminderToDB(): void {
    let detailObject: Reminder = {
      message: this.message,
      time: this.time,
      date: this.date
    }
    this.loginService.addReminder(detailObject);
    alert('Reminder added Successfully');
  }

}
