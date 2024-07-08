import React from 'react'
import Pokemon from './Pokemon';

const PokeGallery = () => {
    const pokemons = [
        {
          name: 'Pikachu',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          types: ['Electric']
        },
        {
          name: 'Charmander',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
          types: ['Fire']
        },
        {
          name: 'Squirtle',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
          types: ['Water']
        },
        {
          name: 'Bulbasaur',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          types: ['Grass', 'Poison']
        },
        {
          name: 'Charizard',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          types: ['Fire', 'Flying']
        },
        {
          name: 'Jolteon',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
          types: ['Electric']
        },
        {
          name: 'Vaporeon',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
          types: ['Water']
        },
        {
          name: 'Flareon',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
          types: ['Fire']
        },
        {
          name: 'Meowth',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
          types: ['Normal']
        },
        {
          name: 'Mr. Mime',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
          types: ['Psychic', 'Fairy']
        },
        {
          name: 'Gengar',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
          types: ['Ghost', 'Poison']
        },
        {
          name: 'Dragonite',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
          types: ['Dragon', 'Flying']
        }
      ];
  return (
    
    <div className="poke-gallery">
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} {...pokemon} />
      ))}
    </div>
  )
}

export default PokeGallery