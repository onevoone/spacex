import { types } from 'mobx-state-tree'


export const shipsViewModel = types
  .model("shipsView", {
    view: types.union(
      types.literal("list"), 
      types.literal("grid")
    )
  })
  .views(self => ({
    get getView () {
      return self.view
    },
  }))
  .actions(self => ({
    setListView () {
      self.view = "list"
    },
    setGridView () {
      self.view = "grid"
    },
  }))
