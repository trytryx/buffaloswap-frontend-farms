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

const clickHandlerBabySwap = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://babyswap.medium.com/buffaloswap-new-babyswap-friend-coming-in-ae6e7d4641d4','_blank');
  }

const BabySwap = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          BabySwap
        </Heading>
        <CardImage src="/images/friends/babyswap_small.png" alt="babyswap" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          BuffaloSwap listed on BabySwap Playground
           </Text>
          
          
        </Block>
        
        <Block>
          
          <Text color='white' fontSize="14px">
          <a href="https://home.babyswap.finance/" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>BabySwap</span></a> made friends with Buffalo, the strong and reliable mate.
          Stake <a href="https://buffaloswap.org/farms" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>BUFF-BABY</span></a> yield farming on BuffaloSwap.
          Some juicy rewards are waiting for you to claim!
          Buffalo is one of Baby&apos;s best friends, and we will together bring more surprises to our users and cooperated partners!
          </Text>
        </Block>

        <Block>
           
          <Text color='white' fontSize="14px">
          Baby is the Future!
           </Text>
          
          
        </Block>

        <Actions>
            <Button
              id="babyswapbutton"

              onClick={clickHandlerBabySwap as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default BabySwap

