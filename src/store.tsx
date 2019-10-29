import { shipsViewModel } from './features/common'


const shipsView = shipsViewModel.create({
  view: "grid",
})


export type shipsViewType = typeof shipsView;


export const store = {
  shipsView,
}
