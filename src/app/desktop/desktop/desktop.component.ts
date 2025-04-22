import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent implements OnInit  {

  email = 'er.ronak2495@gmail.com';
  isDark = false;

  projects = [
    {
      name: 'Supersee',
      tech: ['Electron JS', 'Angular', 'Firebase'],
      desc: 'Cross-platform productivity monitoring tool with user tracking.'
    },
    {
      name: 'CICO',
      tech: ['Angular', 'Ionic'],
      desc: 'Hybrid mobile and admin panel app for organization management.'
    },
    {
      name: 'Conduct',
      tech: ['Angular', 'HTML', 'CSS', 'TypeScript'],
      desc: 'Web-based project management and monitoring tool.'
    },
    {
      name: 'WAPP Master',
      tech: ['JavaScript', 'HTML', 'CSS'],
      desc: 'Chrome extension to export WhatsApp contacts in various formats.'
    }
  ];


  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}
