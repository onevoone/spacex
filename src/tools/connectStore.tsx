import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import { shipsViewType } from '../store'


interface ComposeProps {
  store: {
    shipsView: shipsViewType;
  };
}


export const connectStore = () => {
  return compose<ComposeProps, any>(
    inject("store"),
    observer
  )
} 
