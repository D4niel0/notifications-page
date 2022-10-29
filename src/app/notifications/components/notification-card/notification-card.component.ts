import { Component, Input, OnInit } from '@angular/core';
import { Notifications } from '../../services/avatar.service';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {
  @Input() card: Notifications;

  constructor() {}

  ngOnInit(): void {}
}
