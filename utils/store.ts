import create, {UseStore} from "zustand"
import {AppState} from '../interfaces/index'

export const useStore: UseStore<AppState> = create(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0})
}))