import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading,Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const Row = styled.div`
  align-items: center;
  display: flex;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <>
    <Flex justifyContent="space-between" alignItems="right" style={{display: 'flow-root', marginLeft: '8px'}}>
      <Row>
        <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px" pt='4px'>
          BUFF
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pt='4px'>
          {TranslateString(999, 'Earned')}
        </Text>
        <Text style={{paddingLeft : '8px' }} bold textTransform="uppercase" fontSize="16px" pr="3px" color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>
          {displayBalance}
        </Text>
        
        </Flex>
      </Row>

      <BalanceAndCompound style={{paddingTop: '4px', alignItems: 'baseline'}}> 
        {pid === 120 ? (
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            size="sm"
            variant="secondary"
            marginBottom="15px"
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </Button>
        ) : null}
        <Button size="sm"
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(999, 'Harvest')}
        </Button>
      </BalanceAndCompound>  
      
    </Flex>

    
  </>
  )
}

export default HarvestAction
