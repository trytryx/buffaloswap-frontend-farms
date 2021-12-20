import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledBannerCard = styled(Card)`
  background-size: 100%,100%;
  background-image: url('/images/header_huge2.png');
  background-repeat: no-repeat;
  background-position: top right;
  grid-column: span 12 / auto;
  min-height: 375;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 32px;
  text-align: center;
`

const BannerCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledBannerCard>
      <CardBody>
        <Heading as="h1" size="xl" mb="24px" color="white">
          {TranslateString(576, 'Buffalo')}
        </Heading>
        <Text color="primary">{TranslateString(578, "The only yield farm for Buffalo's on there way to the Moon.")}</Text>
      </CardBody>
    </StyledBannerCard>
  )
}

export default BannerCard
