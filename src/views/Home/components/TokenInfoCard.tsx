import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text, Button, MetamaskIcon, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Flat from 'views/Friends/components/Flat'

const StyledTokenInfoCard = styled(Card)`
  align-items: center;
  flex: 1;

`

declare const window: any;

const onAddMetamask = (callback:any) => {

        const provider = window.web3.currentProvider
              provider.sendAsync({
                method: 'metamask_watchAsset',
                params: {
                  "type":"ERC20",
                  "options":{
                    "address": "0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C",
                    "symbol": "BUFF",
                    "decimals": 9,
                    "image": "https://www.buffaloswap.org/images/logo_600.png",
                  },
                },
                id: Math.round(Math.random() * 100000),
              }, (err:any, added:any) => {
                console.log('provider returned', err, added)
                
              })

}

const onAddMetamaskRed = (callback:any) => {

  const provider = window.web3.currentProvider
        provider.sendAsync({
          method: 'metamask_watchAsset',
          params: {
            "type":"ERC20",
            "options":{
              "address": "0x000000000000000000000000000000000000dead",
              "symbol": "BUFFS",
              "decimals": 18,
              "image": "https://www.buffaloswap.org/images/redbuff/red_circle_512.png",
            },
          },
          id: Math.round(Math.random() * 100000),
        }, (err:any, added:any) => {
          console.log('provider returned', err, added)
          
        })

}

const TokenInfoCard = () => {

  return (
    <StyledTokenInfoCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Token Address
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
        
          {/* </Heading> */}

          <Text color="white">BUFF <img src="https://www.buffaloswap.org/images/logo_buffaloswap_32.png" alt="" width="22px" style={{position: 'relative', top: '5px'}}/> </Text>
          <Text color="primary" fontSize="14px">
            <a href="https://bscscan.com/address/0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C" target="_blank" rel="noreferrer">
            0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C
            </a>
          </Text>
          <Text color="primary">&nbsp;</Text>
          
          <Text color="white">BUFFS <img src="https://www.buffaloswap.org/images/redbuff/red_circle_48.png" alt="" width="18px" style={{position: 'relative', top: '3px'}}/> </Text>
          <Text color="primary" fontSize="14px">
            <a href="https://bscscan.com/address/0x000000000000000000000000000000000000dead" target="_blank" rel="noreferrer">
            0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C
            </a>
          </Text>
          <Text color="primary">&nbsp;</Text>
         
          <Flex justifyContent="space-between">
          <Button variant="secondary" onClick={onAddMetamask}> $BUFF to&nbsp;
            <MetamaskIcon />
          </Button>
          <Button variant="secondary" onClick={onAddMetamaskRed}> $BUFFS to&nbsp;
            <MetamaskIcon />
          </Button>
          </Flex>
        </>
      </CardBody>
    </StyledTokenInfoCard>
  )
}

export default TokenInfoCard
