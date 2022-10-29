import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface Avatars {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  getAvatars() {
    const $avatars = of<Avatars[]>([
      {
        name: 'avatar-mark-webber.webp',
      },
      {
        name: 'avatar-angela-gray.webp',
      },
      {
        name: 'avatar-jacob-thompson.webp',
      },
      {
        name: 'avatar-rizky-hasanuddin.webp',
      },
      {
        name: 'avatar-kimberly-smith.webp',
      },
      {
        name: 'avatar-nathan-peterson.webp',
      },
      {
        name: 'avatar-anna-kim.webp',
      },
    ]);

    return $avatars;
  }
}
