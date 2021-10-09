import { Time } from "@angular/common";

export interface Reminder {
    message: string,
    date: Date,
    time: Time
}