import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';

@NgModule({
  declarations: [MainComponentComponent, NotificationCardComponent],
  imports: [CommonModule, NotificationsRoutingModule],
})
export class NotificationsModule {}
