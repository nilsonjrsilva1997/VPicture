import { Component, Injectable, OnInit } from '@angular/core';
import { FotoService } from './fotos/foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  fotos: any[] = [];

  constructor(private fotoService: FotoService) {
      
  }
  
  ngOnInit(): void {    
    this.fotoService
    .listFromUser('flavio')
    .subscribe(fotos => this.fotos = fotos);
  }

  
}