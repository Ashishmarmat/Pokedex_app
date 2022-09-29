import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {PokemonPaginatedResponse} from '../interfaces/pokemonInterfaces';
import {PokemonFull} from '../interfaces/pokemonInterfaces';

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemonList: builder.query<PokemonPaginatedResponse, string>({
      query: (offset: string) => `pokemon?offset=${offset}&limit=20`,
    }),
    getPokemonByName: builder.query<PokemonFull, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    // getAllPokemonList: builder.query({
    //   query: () => `pokemon?offset=0&limit=20`,
    // }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetAllPokemonListQuery } = pokemonApi

