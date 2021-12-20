import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import StakeActionTable from './StakeActionTable'
import HarvestActionTable from './HarvestActionTable'

const Action = styled.div`
  padding-top: 0px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
  totalValue: BigNumber
}

const CardActionsTable: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account, totalValue }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID]
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    if (isTokenOnly) {
      return getContract(ethereum as provider, tokenAddress)
    }
    return getContract(ethereum as provider, lpAddress)
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  // console.log(farm)

  
  // constakeole.log(stakedBalance.div(new BigNumber(10).pow(18)))
  // console.log(totalValue)
  // console.log(stakedBalance.div(new BigNumber(10).pow(18)).multipliedBy(totalValue))
  
const Row = styled.div`
align-items: center;
display: flex;
`
  
  
  const myStakedValue = stakedBalance && farm.lpTokenBalance
    ? `$${Number((stakedBalance.multipliedBy(totalValue)).div(farm.lpTokenBalance)).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : ' '

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeActionTable
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        depositFeeBP={depositFeeBP}
        myStakedValue={myStakedValue}
      />
    ) : (

      <Flex justifyContent="space-between" alignItems="center" style={{display: 'flow-root', marginLeft: '8px'}}>
        <Row>
          <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            &nbsp;
          </Text>   
          </Flex>
        </Row>
        <Row>
          <Button mt="8px" size="sm" disabled={requestedApproval} onClick={handleApprove}>
            {TranslateString(999, 'Approve Contract')}
          </Button>
        </Row>
    </Flex>



     
    )
  }

  return (
    <Action>

      <Flex style={{justifyContent: 'space-between'}}>

          <Flex pr="8px" justifyContent="space-between" alignItems="center" style={{display: 'flow-root'}}>
            <HarvestActionTable earnings={earnings} pid={pid} />
           
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" style={{display: 'flow-root'}}>
            
            {!account ? <UnlockButton mt="8px" size="md" /> : renderApprovalOrStakeButton()}
          </Flex>
      
      </Flex>

     
      
    </Action>

  )
}

export default CardActionsTable
