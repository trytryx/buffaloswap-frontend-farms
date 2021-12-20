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

const clickHandlerFlat = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://flatswap.exchange/','_blank');
  }

const Flat = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          FlatSwap
        </Heading>
        <CardImage src="/images/friends/flat_small.png" alt="flat" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          Make some noise for our New Partner!
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            FlatSwap has joined our Grasslands!
          </Text>
          <Text color='white' fontSize="14px">
            <a href="https://buffaloswap.org/grasslands" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Stake</span></a> $BUFF to earn $FLAT.
          </Text>
          <Text color='white' fontSize="14px">
            &nbsp;
          </Text>
          <Text color='white' fontSize="14px">
            FlatSwap is the House of the Meme Tokens on Binance Smart Chain!
          </Text>
          <Text color='white' fontSize="14px">
            &nbsp;
          </Text>
        </Block>

        
        <Actions>
            <Button
              id="flatbutton"

              onClick={clickHandlerFlat as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default Flat

