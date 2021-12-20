import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue,useTotalValuePools } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  const totalValuePools = useTotalValuePools()

  // const tvl = totalValue.toFixed(2);
  // console.log('-> ',totalValue.toNumber())
  // console.log('-> ',totalValuePools.toNumber())
  const theTotal = totalValue.plus(totalValuePools)

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'Total Locked (TVL)')}
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <Heading size="lg" mb="52px">&nbsp;</Heading>
          <CardValue value={theTotal.toNumber()} prefix="$" decimals={2} />
          {/* </Heading> */}
          <Text color="textSubtle">Across all Farms, Pools and Grasslands</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
