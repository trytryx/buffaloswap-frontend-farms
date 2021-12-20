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

const clickHandlerPear = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://app.pearzap.com/?r=yvA3DAFy9f43y16a000bb72bD5397yyyycz03bFFf7','_blank');
  }

const Pear = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          PearZap
        </Heading>
        <CardImage src="/images/friends/pear_small.png" alt="flat" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          We have a juicy new friend!
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            PearZap has joined our Grasslands!
          </Text>
          <Text color='white' fontSize="14px">
            <a href="https://buffaloswap.org/grasslands" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Stake</span></a> $BUFF to earn $PEAR.
          </Text>
          <Text color='white' fontSize="14px">
            Available on BSC and Polygon.
          </Text>
          <Text color='white' fontSize="14px">
            PearZap core values are: Innovation & long term vision, Security & Community driven
          </Text>
          <Text color='white' fontSize="14px">
            &nbsp;
          </Text>
        </Block>

        
        <Actions>
            <Button
              id="flatbutton"

              onClick={clickHandlerPear as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default Pear

