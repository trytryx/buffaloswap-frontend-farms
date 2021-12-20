import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image, Progress } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { Pool } from 'state/types'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import useBlock from 'hooks/useBlock'

import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import { useSmartStake } from '../../../hooks/useStake'
import { useSmartUnstake } from '../../../hooks/useUnstake'

import { useSmartChefHarvest } from '../../../hooks/useHarvest'


import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CardTitle from './CardTitle'
import Card from './Card'
import OldSyrupTitle from './OldSyrupTitle'
import HarvestButton from './HarvestButton'
import CardFooter from './CardFooter'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
}

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    sousId,
    image,
    tokenName,
    stakingTokenName,
    stakingTokenAddress,
    projectLink,
    harvest,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    isComingSoon,
    userData,
    stakingLimit,
    burnFee,
    weeklyroi
  } = pool

  // console.log("burnFee",burnFee)
  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress[CHAIN_ID])
  const { account } = useWallet()
  const block = useBlock()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSmartStake(sousId, isBnbPool)
  const { onUnstake } = useSmartUnstake(sousId)
  const { onReward } = useSmartChefHarvest(sousId, isBnbPool)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const blocksUntilStart = Math.max(startBlock - block, 0)
  const blocksRemaining = Math.max(endBlock - block, 0)
  // console.log ('start', startBlock)
  // console.log ('end', endBlock)
  // console.log ('until start', blocksUntilStart)
  // console.log ('until remain', blocksRemaining)
  const isOldSyrup = stakingTokenName === QuoteToken.SYRUP
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
      burnFeeBP={burnFee * 10}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  const progressStart = ((block - startBlock) * 100 ) / (endBlock - startBlock) 
  const progressStep = 100

  let tt =  'rgb(10, 62, 80)'
  if (!pool.stakingTokenName.includes('BUFF')) {
    tt = 'rgb(18, 37, 55)'
  }
  if (pool.stakingTokenName.includes('REDBUFF')) {
    tt = 'rgb(55, 18, 18)'
  }

  return (
    <Card isActive={isCardActive} isFinished={isFinished} isComingSoon={isComingSoon} style={{backgroundColor: tt}}>
      {isFinished && <PoolFinishedSash />}
      {isComingSoon && <PoolComingSoonSash />}
      
    
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isFinished}>
          {isOldSyrup && '[OLD]'} {tokenName} {TranslateString(348, 'Pool')}
        </CardTitle>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Image src={`/images/bnbpool/${tokenName}.png`} width={64} height={64} alt={tokenName} />
          </div>
          {account && harvest && !isOldSyrup && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        {!isOldSyrup ? (
          <BalanceAndCompound>
            <Balance
              value={getBalanceNumber(earnings, tokenDecimals)}
              decimals={(tokenName === 'BTCB' || tokenName === 'WBNB') ? 5 : 3}
              isDisabled={isFinished}
            />
          </BalanceAndCompound>
        ) : (
          <OldSyrupTitle hasBalance={accountHasStakedBalance} />
        )}
        <Label isFinished={isFinished} text={TranslateString(330, `${tokenName} earned`)} />
         
        <StyledCardActions>
          {!account && <UnlockButton />}
          {account &&
            (needsApproval && !isOldSyrup ? (
              <div style={{ flex: 1 }}>
                <Button disabled={isFinished || requestedApproval} onClick={handleApprove} fullWidth>
                  Approve
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <IconButton disabled={isFinished} onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                )}
              </>
            ))}
        </StyledCardActions>
         <StyledDetails>
          <div style={{ flex: 1 }}>{TranslateString(736, 'APR')}:</div>
          {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
            '-'
          ) : (
            <Balance fontSize="14px" isDisabled={isFinished} value={apy?.toNumber()} decimals={2} unit="%" />
          )}
        </StyledDetails>
         <StyledDetails> 
           <div style={{ flex: 1 }}>Deposit fee:</div> 
           {weeklyroi}
          </StyledDetails> 
          <StyledDetails> 
           <div style={{ flex: 1 }}>Max Deposit:</div> 
           3,000,000
          </StyledDetails> 
          <ProgressWrapper>
            <Progress primaryStep={progressStart} secondaryStep={progressStep} />
          </ProgressWrapper>
          <StyledDetails> 
           <div style={{ flex: 1 }}>Start Block:</div> 
           <a href={`https://bscscan.com/block/${startBlock}`} rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>{startBlock}</span></a>
          </StyledDetails> 
          <StyledDetails> 
           <div style={{ flex: 1 }}>End Block:</div> 
           <a href={`https://bscscan.com/block/${endBlock}`} rel='noreferrer' target='_blank'><span style={{ color: 'rgb(246, 149, 34)' }}>{endBlock}</span></a>
          </StyledDetails> 

        <StyledDetails>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label={stakingTokenName}>
               Your {stakingTokenName}:&nbsp;
            </span>
            
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
        </StyledDetails>
        {burnFee > 0 ? (
          <StyledDetails>
            <div style={{ flex: 1 }}>
              <span role="img" aria-label={stakingTokenName}>
                🔥{' '}
              </span>
              Deposit fee (Burned):
            </div>
            <Balance fontSize="14px" isDisabled={isFinished} value={burnFee / 10} decimals={1} unit="%" />
          </StyledDetails>
        ) : (
          ''
        )}
      </div>
      <CardFooter
        projectLink={projectLink}
        totalStaked={totalStaked}
        blocksRemaining={blocksRemaining}
        isFinished={isFinished}
        blocksUntilStart={blocksUntilStart}
        poolCategory={poolCategory}
        unit=" blocks"

      />
    </Card>
  )
}

const PoolComingSoonSash = styled.div`
  background-image: url('/images/pool-coming-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
  padding: 3px 0;
`

const ProgressWrapper = styled.div`
  display: block;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
`

export default PoolCard
