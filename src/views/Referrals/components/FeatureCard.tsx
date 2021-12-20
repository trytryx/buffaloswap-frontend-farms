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

const FeatureCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledFeatureCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'Features')}
        </Heading>
        <>
           <Heading as="h1" size="md" mb="24px" color="primary">
          An on-chain referral program has been implemented to incentivize users to invite friends to join the farming. Inviters can earn 5% of his/her friend&#39;s earnings. Our referral program lets users earn BUFF&#39;s without depositing any tokens.
          </Heading>
          <Text color="white">1. Visit Buffalo referral program page</Text>
          <Text color="white">2. Unlock your wallet to get your unique referral link</Text>
          <Text color="white">3. Share your referral link with your friends</Text>
          <Text color="white">4. When your friends connect wallet, a cookie will be recorded in his browser that he is referred by you</Text>
          <Text color="white">5. When your friends *USE THE SAME BROWSER* to deposit the first time, your wallet will be recorded in the system.</Text>
          <Text color="white">6. Every time your friends harvest rewards from farms, you will receive referral commissions send to your wallet automatically</Text>
          <Text color="white">7. The current referral commission rate is 5%</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>
          <Heading as="h1" size="md" mb="24px" color="primary">
          When will I receive my Referral Reward?
          </Heading>
          <Text color="white">You will automatically receive a BUFF&#39;s reward in your wallet whenever the referred user Harvests / Withdraws from our Farms and/or Pools.</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">&nbsp;</Heading>
          <Heading as="h1" size="md" mb="24px" color="primary">
          Will I lose % of my income to the referrer because of using his referral link?
          </Heading>
          <Text color="white">No! The contract will automatically mint this % anew and send it to referrer wallet. So you and him earn together, you don&#39;t lose anything from your harvested rewards.</Text>
         
        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default FeatureCard
