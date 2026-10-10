import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {


  currentTheme: 'light' | 'dark' = 'dark';

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.currentTheme = savedTheme;
    }

    this.applyTheme();
  }

  
  toggleTheme() {

    if (this.currentTheme === 'dark') {

      // Change dark → light
      this.currentTheme = 'light';

    } else {

      // Change light → dark
      this.currentTheme = 'dark';
    }

    
    localStorage.setItem('theme', this.currentTheme);

   
    this.applyTheme();
  }

 
  private applyTheme() {

    document.documentElement.setAttribute(
      'data-bs-theme',
      this.currentTheme
    );
  }
}