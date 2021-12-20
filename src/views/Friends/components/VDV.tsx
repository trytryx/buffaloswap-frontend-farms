import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'



const StyledFriendsCard = styled(Card)`
  background-image: url('/images/egg/2a.png');
  background-repeat: no-repeat;
  background-position: top center;
  min-height: 376px;
  background-size: 100%, 100%
`

const myLink = styled.div`
  font-color: rgb(246, 149, 34);
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
  border-radius: 32px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const clickHandlerVDV = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://vdvtoken.io/','_blank');
  }

const VDV = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          VDV Virvia
        </Heading>
        <CardImage src="/images/friends/vdv_small.png" alt="vdv" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          BuffaloSwap Partnering with VDV Virvia.
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            VDV has joined our <a href="https://buffaloswap.org/grasslands" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Grasslands</span></a> and <a href="https://buffaloswap.org/farms" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Farms</span></a>!
          </Text>
          
          <Text color='white' fontSize="14px">
            VDV Token can be utilized by any e-commerce website. It takes any merchant around 5 minutes to add VDV payment on Shopify stores.
          </Text>
          
        </Block>

        <Block>
         
          <Text color='white' fontSize="14px">
            Virvia is one of the largest e-commerce platforms in Australia.  
          </Text>
        </Block>

        <Actions>
            <Button
              id="vdvbutton"

              onClick={clickHandlerVDV as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default VDV

