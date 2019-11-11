import React from 'react'
import { Box, Typography, Paper, Link } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'

import { Info } from '../types'
import { GET_INFO } from '../requests'
import { Loading, Main } from '../../common'


export const About = () => {
  const { loading, data } = useQuery<Info>(GET_INFO)

  if (loading) {
    return <Loading />
  }

  const company = data!.company

  return (
    <Main>
      <Box>
        <Typography>CEO: {company.ceo}</Typography>
        <Typography>COO: {company.coo}</Typography>
        <Typography>CTO: {company.cto}</Typography>
        <Typography>cto_propulsion: {company.cto_propulsion}</Typography>
        <Typography>employees: {company.employees}</Typography>
        <Typography>founded: {company.founded}</Typography>
        <Typography>founder: {company.founder}</Typography>
        <Paper>
          <Typography>headquarters</Typography>
          <Typography>Address: {company.headquarters.address}</Typography>
          <Typography>City: {company.headquarters.city}</Typography>
          <Typography>State: {company.headquarters.state}</Typography>
        </Paper>
        <Typography>launch_sites: {company.launch_sites}</Typography>
        <Typography>name: {company.name}</Typography>
        <Typography>summary: {company.summary}</Typography>
        <Typography>test_sites: {company.test_sites}</Typography>
        <Typography>valuation: {company.valuation}</Typography>
        <Typography>vehicles: {company.vehicles}</Typography>
        
        <Paper>
          <Link href={company.links.elon_twitter}><Typography>Elon Twitter</Typography></Link>
          <Link href={company.links.flickr}><Typography>Flickr</Typography></Link>
          <Link href={company.links.twitter}><Typography>twitter</Typography></Link>
          <Link href={company.links.website}><Typography>website</Typography></Link>
        </Paper>
      </Box>
    </Main>
  )
}
