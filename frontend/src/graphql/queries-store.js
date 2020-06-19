export const pokemonDetails = ` query pokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      name
      types
      evolutions {
        id
        name
        image
        isFavorite
      }
      weight {
        maximum
        minimum
      }
      height {
        maximum
        minimum
      }
      image
      maxCP
      maxHP
      sound
      isFavorite
    }
  }`;

export const toggleFavoritePokemon = `
  mutation toggleFavoritePokemon($id: ID!) {
    toggleFavoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`;

export const allPokemons = ` query Allpokemons {
    allpokemons {
      id
      image
      name
      types
      isFavorite
    }
  }`;

export const pokemonTypes = `
  query pokemonTypes {
    pokemonTypes
  }
`;
