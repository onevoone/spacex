import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ShipsData } from '../types'
import { Loading } from '../../common'
import { GET_SHIPS } from '../requests'
import { connectStore } from '../../../tools'
import { ShipsListView, ShipsGridView } from '../organisms/shipsView'


export const Ships = connectStore()(({ store: { shipsView } }) => {
  const { loading, data } = useQuery<ShipsData>(GET_SHIPS)

  if (loading) {
    return <Loading />
  }


  return {
    "list": <ShipsListView ships={data!.ships} />,
    "grid": <ShipsGridView ships={data!.ships} />
  }[shipsView.view]
})
