import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

export interface Notifications {
  img: string;
  name: string;
  text: string;
  time: string;
  post?: string;
  group?: string;
  isPicCommented: boolean;
  commentPicture?: string;
  message?: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  private $avatars = of<Notifications[]>([
    {
      img: 'avatar-mark-webber.webp',
      name: 'Mark Webber',
      text: 'reacted to your recent post ',
      post: 'My first tournament today!',
      time: '1m ago',
      isPicCommented: false,
      status: false,
    },
    {
      img: 'avatar-angela-gray.webp',
      name: 'Angela Gray',
      text: 'followed you',
      time: '5m ago',
      isPicCommented: false,
      status: false,
    },
    {
      img: 'avatar-jacob-thompson.webp',
      name: 'Jacob Thompson',
      text: 'has joined your group ',
      time: '1 day ago',
      group: 'Chess Club',
      isPicCommented: false,
      status: false,
    },
    {
      img: 'avatar-rizky-hasanuddin.webp',
      name: 'Rizky Hasanuddin',
      text: 'sent you a private message ',
      time: '5 day ago',
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isPicCommented: false,
      status: true,
    },
    {
      img: 'avatar-kimberly-smith.webp',
      name: 'Kimberly Smith',
      text: 'commented on your picture ',
      time: '1 week ago',
      commentPicture: 'image-chess.webp',
      isPicCommented: true,
      status: true,
    },
    {
      img: 'avatar-nathan-peterson.webp',
      name: 'Nathan Peterson',
      text: 'reacted to your recent post ',
      time: '2 week ago',
      post: '5 end-game strategies to increase your win rate',
      isPicCommented: false,
      status: true,
    },
    {
      img: 'avatar-anna-kim.webp',
      name: 'Anna Kim',
      text: 'left the group ',
      group: 'Chess Club',
      time: '2 week ago',
      isPicCommented: true,
      status: true,
    },
  ]);

  notificationsObserver() {
    return this.$avatars;
  }

  postReads() {
    return this.$avatars.pipe(
      map((el) =>
        el.map((ele) => {
          if (!ele.status) {
            ele.status = true;
          }
        })
      )
    );
  }
}
