import React from 'react'
import { Typography } from '@material-ui/core'


interface Text {
  label: string;
  value: string | number | React.ReactNode | null;
  expression?: boolean;
}


export const DetailsText = ({ label, value, expression }: Text) => {
  if (expression) {
    return <Typography component="p">{label}: {value}</Typography>
  } else if (!value) {
    return null
  }
  return <Typography component="p">{label}: {value}</Typography>
}
