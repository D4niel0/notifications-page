import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { Notifications, AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit, OnDestroy {
  cards: Notifications[] = [];
  notificationsNum: number = 0;

  $onDestroy: Subject<void> = new Subject<void>();

  constructor(public avatarService: AvatarService) {}

  ngOnInit(): void {
    // GET AVATARS NAMES
    this.avatarService
      .notificationsObserver()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((avatars) => {
        this.cards = avatars;
        avatars.forEach((element) => {
          if (!element.status) {
            this.notificationsNum++;
          }
        });
      });
  }

  // Read notifications pending and mark complete
  read() {
    this.avatarService
      .notificationsObserver()
      .pipe(
        map((el) =>
          el.map((ele) => {
            if (!ele.status) {
              ele.status = true;
            }
          })
        )
      )
      .subscribe({
        next: (val) => {
          this.notificationsNum = 0;
        },
        error: (err) => console.log(err),
      });
  }

  ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }
}
