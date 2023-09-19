import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData
  atributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(
    private service: PokemonService
    ) {
      this.pokemon = {
        id: 0,
        name: '',
        sprites: {
          front_default: ''
        },
        types: []
      }
    }

  ngOnInit(): void {
    // O que é o subscribe?
    // Para conseguimos ler os dados do Observable, temos que nos inscrever no canal dele.
    // O subscribe nos permite ler os dados do observable
  this.getPokemon("pikachu");
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log("not found")
      }
    )
  }
}
