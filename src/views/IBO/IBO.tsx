import { Heading,Flex,Text } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import React from 'react'

import IBOCard from './components/IBOCard'

const IBO: React.FC = () => {
  return (
    <Page>
      
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', marginBottom: '5px' }}>
        Initial BUFF Offering
      </Heading>

      {/* <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Warm welcome to REDBUFF, the BUFF fuel !
      </Heading>

  */}

      <Flex justifyContent="center" >
        <img src="/images/redbuff/full.png" alt="redbuff" width="50%" style={{ zIndex: 10}}/>
      </Flex>
      <IBOCard/>
      

    </Page>
  )
}

export default IBO
