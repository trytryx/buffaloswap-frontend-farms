import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import {
  useFarms,
  usePriceBnbBusd,
  usePools,
} from 'state/hooks'
import { QuoteToken } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'
import Coming from './components/Coming'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()
  const block = useBlock()
   



  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)

    // console.log('--', tokenName, tokenPrice, quoteToken, tokenPriceBN)
    if (tokenName === 'BNB' || tokenName === 'WBNB') {
      // console.log('a')
      return new BigNumber(1)
    }
    // if (tokenPrice && quoteToken === QuoteToken.BUSD) {
    if (tokenPrice && tokenName === QuoteToken.BUSD ) {
      // console.log('b')
      return new BigNumber(1).div(tokenPriceBN)
      // return tokenPriceBN.div(bnbPriceUSD)
    }
    // console.log('end')
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    
    const lpSymbolReward = pool.apySymbolReward
    const lpSymbolStaking = pool.apySymbolStaking
  
    const rewardTokenFarm = farms.find((f) => f.lpSymbol === lpSymbolReward)
    const stakingTokenFarm = farms.find((s) => s.lpSymbol === lpSymbolStaking)

    // /!\ Assume that the farm quote price is BNB
    let stakingTokenPriceInBNB = priceToBnb(
      pool.apyStakingQuoke,
      stakingTokenFarm?.tokenPriceVsQuote,
      stakingTokenFarm?.quoteTokenSymbol,
    )
    let rewardTokenPriceInBNB = priceToBnb(
      // pool.tokenName,
      pool.apyRewardQuoke,
      rewardTokenFarm?.tokenPriceVsQuote,
      rewardTokenFarm?.quoteTokenSymbol,
    )
    
    if (pool.apyRewardQuoke === 'GEM' ){
       rewardTokenPriceInBNB = new BigNumber(978).div(1000000) 
       // 0.000977755
    }
     if (pool.apyRewardQuoke === 'VDV' ){
       rewardTokenPriceInBNB = new BigNumber(330739).div(1000000000000) 
       // 0.000000330739
    }
    if (pool.apyRewardQuoke === 'BIRD'){
        rewardTokenPriceInBNB = new BigNumber(502510).div(1000000000000) 
      //  0.00000050251041
    }
    if (pool.apyRewardQuoke === 'FLAT'){
      rewardTokenPriceInBNB = new BigNumber(223231).div(100000000000) 

    //  0.00000050251041
    //  0.00000223231
  }
  if (pool.apyRewardQuoke === 'PEAR'){
    rewardTokenPriceInBNB = new BigNumber(24).div(100000) 

  //  0.00000050251041
  //  0.00000223231
  
}
if (pool.apyRewardQuoke === 'BALPAC'){
  rewardTokenPriceInBNB = new BigNumber(128).div(1000000000) 
//  0.000000128437
//  0.00000050251041
//  0.00000223231
}
if (pool.apyRewardQuoke === 'BBQ'){
  rewardTokenPriceInBNB = new BigNumber(333791).div(1000000000) 
// 333791 / 1000000000
}

if (pool.stakingTokenName === QuoteToken.BUFFREDBUFF)
{
  // $0.545 = 1 LP
  // 460$ = 1 BNB
  // 0,001184782609

  // chnage to $0.13 and 1 bnb = 520$
  // 0,00025
  //
  stakingTokenPriceInBNB = new BigNumber(25).div(100000) ;
}
if (pool.apyRewardQuoke === 'BABY'){
  rewardTokenPriceInBNB = new BigNumber(152052).div(100000000) ;
}

if (pool.apyRewardQuoke === 'MUFT'){
  rewardTokenPriceInBNB = new BigNumber(438265).div(100000000000000) ;
}
// 1 muft = 0.00000000438265

 
    // console.log('pool.tokenName', pool.tokenName)
    // console.log(pool.sousId, 'rewardTokenPriceInBNB', rewardTokenPriceInBNB.toString())
    // console.log(pool.sousId, 'stakingTokenPriceInBNB', stakingTokenPriceInBNB.toString())
    const totalRewardPricePerYear = rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    let totalStakingTokenInPool = new BigNumber(0)
    totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    // totalStakingTokenInPool = stakingTokenPriceInBNB.times(1000000)

    // tokens per block * price of BUFF * blocks_per_year / ( tokens in pool x salt price) * 100
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
    // console.log(apy)

    return {
      ...pool,
      isFinished: pool.isFinished || block > pool.endBlock,
      isComingSoon: pool.isComingSoon || (block < pool.startBlock && pool.startBlock > 0 && block > 0),
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            Grasslands
          </Heading>
          <ul style={{paddingLeft: '3px'}}>
            <li>Stake $BUFF to earn new tokens</li>
            <li>You can unstake at any time.</li>
            <li>Rewards are calculated per block</li>
            <li>&nbsp;</li>
            <li>EMPOWERED Grasslands coming soon!</li>
          </ul>
          <Text>
            &nbsp;
          </Text>
          <Text fontSize="10px">
            1.99% transfer tax is automatically applied at each BUFF transaction
          </Text>
          <Text>
            &nbsp;
          </Text>
        </div>
        <img src="/images/logo_buffaloswap_256_empowered.png" alt="SYRUP POOL icon" width={256} height={256} />
      </Hero>
      <PoolTabButtons />

      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            <Coming />
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
