import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  depositFeeBP?: number
  myStakedValue?: string
}

const Row = styled.div`
  align-items: center;
  display: flex;
`

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 22px;
  }
`

const StakeActionTable: React.FC<FarmCardActionsProps> = ({ stakedBalance, tokenBalance, tokenName, pid, depositFeeBP, myStakedValue }) => {
  const TranslateString = useI18n()
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} depositFeeBP={depositFeeBP} />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />,
  )

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <div>
        <Button size="sm" onClick={onPresentDeposit}>{TranslateString(999, 'Stake')}</Button>
      </div>
    ) : (
      <div style={{display: 'flex'}}>
        <Button size="sm" variant="tertiary" onClick={onPresentWithdraw} mr="6px">
          <MinusIcon color="primary" />
        </Button>
        <Button size="sm" variant="tertiary" onClick={onPresentDeposit}>
          <AddIcon color="primary" />
        </Button>
      </div>
    )
  }

  return (


<Flex justifyContent="space-between" alignItems="right" style={{display: 'flow-root', marginLeft: '8px'}}>
    <Row>
      <Flex>
      <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px" pt="4px">
        {tokenName}
      </Text>
      <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pt="4px">
        {TranslateString(999, 'Staked')}
      </Text>
      <Text style={{paddingLeft : '8px'}} bold textTransform="uppercase" fontSize="16px" pr="3px" color={rawStakedBalance === 0 ? 'textDisabled' : 'text'}>
        {displayBalance}
      </Text>
      <Text fontSize="12px" color={rawStakedBalance === 0 ? 'textDisabled' : 'text'} pt="4px">
          &nbsp;({myStakedValue})
        </Text>
        
      </Flex>
    </Row>
    <Row style={{justifyContent: 'right'}}>
      <div style={{paddingTop: '4px'}}>
      {renderStakingButtons()}
      </div>
      </Row>
</Flex>


      
    
  )
}

export default StakeActionTable
