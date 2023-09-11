import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledFeatureCard = styled(Card)`
  align-items: left;
  display: flex;
  flex: 1;
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
          <Text color="white">&#9989; Full <a href='https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_BuffaloToken.pdf' rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Audit</span></a> & <a href='https://github.com/solidproof/kyc-certificates/blob/main/KYC_Certificate_Buffalo_Token.png' rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>Team KYC</span></a> Verification by SolidProof</Text>
          <Text color="white">&#9989; Safe, Fair & Transparent Yield Farm</Text>
          <Text color="white">&#9989; 0% Initial Supply owned by the Dev Team</Text>
          <Text color="white">&#9989; 85% of pre-sale added to LP</Text>
          <Text color="white">&#9989; Automatic Liquidity with 1.99% reflection tax</Text>
          <Text color="white">&#9989; Deflationary token (Max Supply)</Text>
          <Text color="white">&#9989; Anti whale system</Text>
          <Text color="white">&#9989; Migrator Code Removed</Text>
          <Text color="white">&#9989; 5% Referral Program</Text>        
          <Text color="white">&nbsp;</Text>
          <Text color="secondary">&#128640; Don&#39;t forget to grab your referral link from the site and invite your friends to earn 5% of their rewards (they won&#39;t lose this 5%, it is newly mined from the system, so you win with them together) </Text>
        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default FeatureCard
