// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Something } from 'path/to/interfaces';

export type Something = {
    id: number
    name: string
}

export type AppState = {
    bears: number
    increasePopulation: () => void
    removeAllBears: () => void
}