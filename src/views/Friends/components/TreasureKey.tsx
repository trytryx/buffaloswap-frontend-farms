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

const clickHandlerTreasurekey = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://www.buffaloswap.org/games','_blank');
  }

const NFTmall = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Treasure Key
        </Heading>
        <CardImage src="/images/friends/treasurekey_small.png" alt="nftmall" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          Buffaloswap X TreasureKey Bet
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            Bet with your BUFF/BNB LP tokens to win big prizes!
          </Text>
          <Text color='white' fontSize="14px">
            Win up to 35x BUFF/BNB LP.
          </Text>
          <Text color='white' fontSize="14px">
            4 games to discover: Roulette, Dice-It, Coin-Flip and Barbell-Roll.
          </Text> 
        </Block>

        <Block>
         
          <Text color='white' fontSize="14px">
            Let&apos;s play!
          </Text>
        </Block>

        <Actions>
            <Button
              id="treasurekeybutton"

              onClick={clickHandlerTreasurekey as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Play
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default NFTmall

