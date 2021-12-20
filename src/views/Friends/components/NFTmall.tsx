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

const clickHandlerNFTmall = (e: MouseEvent): void => {
    e.preventDefault();
    window.open('https://nftmall.medium.com/nftmall-partnering-with-buffaloswap-612e7ca1e32c','_blank');
  }

const NFTmall = () => {
 
  return (
    <StyledFriendsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          NFTmall
        </Heading>
        <CardImage src="/images/friends/nftmall_small.png" alt="nftmall" width={128} height={128} />
        <Block>
          <Text color='white' fontSize="14px">
          BuffaloSwap Partnering with NFTmall
           </Text>
          
          
        </Block>
        
        <Block>
          <Text color='white' fontSize="14px">
            NFTmall has joined our Grasslands!
          </Text>
          <Text color='white' fontSize="14px">
            <a href="https://buffaloswap.org/grasslands" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Stake</span></a> $BUFF to earn $GEM.
          </Text>
          <Text color='white' fontSize="14px">
            NFTmall is also on BuffaloSwap farms.
          </Text>
          <Text color='white' fontSize="14px">
            $GEM and $BUFF LP provider will be able to stake their LP on Buffalo Swap <a href="https://buffaloswap.org/farms" rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Farms</span></a> and getting rewarded with $BUFF token!
          </Text> 
        </Block>

        <Block>
         
          <Text color='white' fontSize="14px">
            NFT meets DeFi & eCommerce!
          </Text>
        </Block>

        <Actions>
            <Button
              id="nftmallbutton"

              onClick={clickHandlerNFTmall as unknown as React.MouseEventHandler<HTMLButtonElement>}
              fullWidth
            >
             Discover
            </Button>
         
        
        </Actions>
      </CardBody>
    </StyledFriendsCard>
  )
}

export default NFTmall

