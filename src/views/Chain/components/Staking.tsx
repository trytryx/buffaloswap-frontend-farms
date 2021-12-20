import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'


const StyledFeatureCard = styled(Card)`
  align-items: left;
  display: flex;
  flex: 1;
  margin-top: 32px;
`

const Staking = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledFeatureCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Buffalo Swap Howto
        </Heading>
        <>
          <Heading as="h1" size="md" mb="24px" color="primary">
           Swap         
          </Heading>
          <Text color="white"><b>*</b> Buffalo Swap is using the pancakeswap v2 router/factory</Text>
          <Text color="white"><b>*</b> You can buy or sell your BUFF on our swap page</Text>
          
          <Text color="white">&nbsp;</Text>
          <Heading as="h1" size="md" mb="24px" color="primary">
           Liquidity         
          </Heading>
          <Text color="white"><b>*</b> You can add or remove LPs on that page</Text>
          <Text color="white"><b>*</b> LP is a Liquidity Pair token (ex: BUFF-BNB)</Text>
          <Text color="white"><b>*</b> When you add LP, you need both of the tokens, and you will get new LPs tokens</Text>


           <Text color="white">&nbsp;</Text>
          <Heading as="h1" size="md" mb="24px" color="primary">
           Farms     
          </Heading>
          <Text color="white"><b>*</b> Stake your LPs tokens on the farms to earn new BUFF</Text>
          <Text color="white"><b>*</b> You can unstake any time (unstake will automatically harvest)</Text>
          <Text color="white"><b>*</b> You can harvest any time</Text>
          <Text color="white"><b>*</b> When staked, your LPs are no more visible on your wallet. Unstake them first if you want to remove the LPs</Text>

           <Text color="white">&nbsp;</Text>
          <Heading as="h1" size="md" mb="24px" color="primary">
           Staking     
          </Heading>
          <Text color="white"><b>*</b> Stake your tokens on the staking page to earn new BUFF</Text>
          <Text color="white"><b>*</b> You can unstake any time (unstake will automatically harvest)</Text>
          <Text color="white"><b>*</b> You can harvest any time</Text>
          <Text color="white"><b>*</b> When staked, your tokens are no more visible on your wallet. Unstake them to get them back.</Text>


           <Text color="white">&nbsp;</Text>
          <Heading as="h1" size="md" mb="24px" color="primary">
           Grasslands         
          </Heading>
          <Text color="white"><b>*</b> You can earn new tokens by staking your BUFF</Text>
          <Text color="white"><b>*</b> Each Grassland is opened for a limited time</Text>
          <Text color="white"><b>*</b> Once closed, you can still find them in the inactive section, and unstake your BUFF (which will trigger the harvest as well)</Text>
          <Text color="white"><b>*</b> Deposit fees are set to 0%, however don&apos;t forget that every BUFF transaction has a tax fee. Therefore, 1.99% is applied in and out of the grasslands</Text>
          <Text color="white"><b>*</b> When staked, your BUFF tokens are no more visible on your wallet. Unstake them to get them back</Text>
          <Text color="white"><b>*</b> You can unstake any time</Text>
          
          
        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default Staking
