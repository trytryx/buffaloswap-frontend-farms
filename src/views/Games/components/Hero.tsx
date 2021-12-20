import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  /* background-image: linear-gradient(180deg, #213546 0%, #16242e 100%); */
  padding-bottom: 20px;
  padding-top: 20px;
`

const StyledHeroMenu = styled.div`
  /* background-image: linear-gradient(180deg, #213546 0%, #16242e 100%); */
  padding-bottom: 5px;
  padding-top: 5px;
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`
const StyledContainerB = styled(Container)`
  display: flex;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`


const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title>Buffalo Betting Games</Title>
          <Blurb>Play REDBUFF - Earn REDBUFF</Blurb>
          <Text>with Treasurekey Bet</Text>
          
        </LeftWrapper>
        <RightWrapper>
          <img src="/images/casino_buffalo.png" alt="casino buffaloswap" width="75%" height="75%"/>
        </RightWrapper>
      </StyledContainer>
      
     <StyledContainerB>
      <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
            <Button variant='secondary' size='sm' as="a" href='/games/roulette' style={{ fontSize: '12px' }}>
              Roulette
            </Button>
            <Text>&nbsp;&nbsp;</Text>
             <Button variant='secondary' size='sm' as="a" href='/games/coin-flip' style={{ fontSize: '12px' }}>
              Coin-Flip
            </Button>
              <Text>&nbsp;&nbsp;</Text>
             <Button variant='secondary' size='sm' as="a" href='/games/dice-it' style={{ fontSize: '12px' }}>
              Dice-it
            </Button>
              <Text>&nbsp;&nbsp;</Text>
             <Button variant='secondary' size='sm' as="a" href='/games/barbell-roll' style={{ fontSize: '12px' }}>
              Barbell-Roll
            </Button>
        </Flex>
     </StyledContainerB>

    </StyledHero>
   
  )
}

export default Hero
