import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/folder/inbox', icon: 'newspaper' },
    { title: 'Business', url: '/folder/outbox', icon: 'business' },
    { title: 'Sports', url: '/folder/favorites', icon: 'basketball' },
    { title: 'Entertainment', url: '/folder/archived', icon: 'videocam' },
    { title: 'Technology', url: '/folder/trash', icon: 'laptop' },
    { title: 'Health', url: '/folder/spam', icon: 'medkit' },
    { title: 'Science', url: '/folder/spam', icon: 'rocket' },
  ];
  constructor() {}
}
