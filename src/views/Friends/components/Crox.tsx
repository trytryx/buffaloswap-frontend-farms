import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'



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

const clickHandlerCrox = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://app.croxswap.com/ref/0xA5DAF0bf65038c222dd94dD75b90000e125dFFf9','_blank');
  }

const Crox = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          CroxSwap
        </Heading>
        <CardImage src="/images/friends/crox_small.png" alt="flat" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          Welcome to our new partners!
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            Another juicy Cross Farms partnership with 0% deposit fee!
          </Text>
          <Text color='white' fontSize="14px">
            <a href="https://croxswap.medium.com/croxswap-x-buffaloswap-d692da9b0b1d" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Read more here</span></a>.
          </Text>
          <Text color='white' fontSize="14px">
            &nbsp;
          </Text>
          <Text color='white' fontSize="14px">
          CroxSwap is a fully decentralized next-generation yield farming protocol which offers dual rewards for staking and farming. 
          </Text>
          <Text color='white' fontSize="14px">
            &nbsp;
          </Text>
        </Block>

        
        <Actions>
            <Button
              id="flatbutton"

              onClick={clickHandlerCrox as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default Crox

