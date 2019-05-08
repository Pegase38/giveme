import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'GiveMe';
  @Input() isSignedIn: boolean;
  @Output() logout: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onLogout() {
    this.logout.emit();
  }
}
