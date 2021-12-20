import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Flex, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'


const StyledFeatureCard = styled(Card)`
  align-items: left;
  display: flex;
  flex: 1;
  margin-top: 0px;
  top: -20px;
`

const FeatureCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledFeatureCard>
      
      <CardBody>
        
        <>
        <Text color="white">&nbsp;</Text>
          <Flex justifyContent="center">
            <Text color="white" fontSize="16px">Presales from 2021-10-01 6pm UTC, to 2021-10-08 6pm UTC</Text>
            
            </Flex>
            <Text color="white">&nbsp;</Text>
            <Flex justifyContent="center">
            
            
            <Button  as="a" href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x2bdAD12C4D947eEdAa18b17365c0969CBb7438c0" external >GET REDBUFF</Button>
          </Flex>
          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>
          
          <Heading as="h1" size="md" mb="24px" color="primary">
          REDBUFF - &#9889; Power on for strength &#9889;     
          </Heading>

          <Text color="white">&#128737; Fair Presale will be held at unicrypt.network &#128737;</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">&#9989; Full Audit & Team KYC Verification by @SolidProof_io</Text>
          <Text color="white">&#9989; Locked Liquidity</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">REDBUFF Charges your energy &#9889;</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">&#9889; Empowered LP with BUFF-REDBUFF - Boosted APRs &#128640;</Text>
          <Text color="white">&#9889; Unlock rare NFTs</Text>
          <Text color="white">&#9889; Exclusives Grasslands pools to earn top-tier crypto assets</Text>
          <Text color="white">&#9889; Super low deposit fees</Text>
          <Text color="white">&#9889; More partnerships & innovation thanks to its 0% transfer fee whitelist feature </Text> 

          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>
          <Flex justifyContent="center">
          <Button  as="a" href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x2bdAD12C4D947eEdAa18b17365c0969CBb7438c0" external >GET REDBUFF</Button>
          
          </Flex>
          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>



          <Heading as="h1" size="md" mb="24px" color="primary">
           The BuffaloSwap’s team is launching a new token: the REDBUFF.          
          </Heading>

          <Text color="white">Presale will be held at unicrypt.network on the principle of Fair presale.</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">It means that the Token price will be the same during pre-sales as the initial LP price to prevent bot sell and whales dumping.</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">&#128578; REDBUFF will serve as fuel for BUFF and will allow you to get more rewards and make it even more valuable than it is.</Text>
          <Text color="white">&nbsp;</Text> 
          <Text color="white">For instance, you will be able to create an empowered LP with BUFF-REDBUFF which will unlock rare NFTs, or give your access to exclusives pools on Grasslands to earn top-tier crypto assets.
These pools will have Boosted Rewards APRs and super low deposit fees.</Text>
          <Text color="white">&nbsp;</Text> 
          <Text color="white">&#128578; REDBUFF will come with the same suite of features as BUFF (anti-whales, No-burn, referral...)</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">The REDBUFF will allow more partnerships and innovation thanks to its 0% transfer fee whitelist feature. (Betting games, Syrup pools partnerships, Exchange listing...)</Text>
          <Text color="white">&nbsp;</Text>
          <Text color="white">Take part in the pre-sales!</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>
          <Flex justifyContent="center">
          <Button  as="a" href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x2bdAD12C4D947eEdAa18b17365c0969CBb7438c0" external >GET REDBUFF</Button>
          
          </Flex>


        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default FeatureCard
