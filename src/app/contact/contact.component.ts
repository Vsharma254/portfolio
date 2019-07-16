import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/mock', name: 'mock', icon: 'info_outline' },
  { link: '/async', name: 'async-http', icon: 'swap_vert' },
  { link: '/back', name: 'back-http', icon: 'swap_vert' },
  { link: '/static/back', name: 'static-back-http', icon: 'swap_vert' },
  { link: '/nonexistent', name: 'nonexistent', icon: 'error' }
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public links: any[] = [];
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map((link) => {
      link.name = `sidebar.${link.name}`;
      return link;
    });
    this.loadScript();
  }
  public loadScript() {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/customscript.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  logout() {
    this.auth.logOut();
  }
}
