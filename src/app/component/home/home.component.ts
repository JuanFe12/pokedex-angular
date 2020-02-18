import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { StyleRenderer, ThemeVariables, lyl } from '@alyle/ui';
import { map } from 'rxjs/operators'

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl `{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  filterpost = ''
  pokemons: string
  readonly classes = this.styleRenderer.renderSheet(STYLES);
  constructor(private service:ApiService, private styleRenderer: StyleRenderer ) { }

  ngOnInit() {
     this.service.getPokemon().subscribe((data => {
       console.log(data);
       this.pokemons = data
       
     }))

     
  }
}
