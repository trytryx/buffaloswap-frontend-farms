import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading, Text, Toggle } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import usePersistState from 'hooks/usePersistState'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmCardTable, { FarmWithStakedValueTable } from './components/FarmTable/FarmCardTable'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'
import ToggleView from './components/ToggleView/ToggleView'
import { DesktopColumnSchema, ViewMode } from './components/types'

export interface FarmsProps {
  tokenMode?: boolean
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  margin-bottom: 32px;
  
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`
const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  
  const [viewMode, setViewMode] = usePersistState(ViewMode.TABLE, { localStorageKey: 'pancake_farm_view' })
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.buffaloPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }
        if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
          totalValue = totalValue.times(cakePrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })

      if (viewMode === ViewMode.TABLE && false) {
          return farmsToDisplayWithAPY.map((farm) => (
            <FarmCardTable
              key={farm.pid}
              farm={farm}
              removed={removed}
              bnbPrice={bnbPrice}
              cakePrice={cakePrice}
              ethereum={ethereum}
              account={account}
            />
          ))
      }
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum, viewMode],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {tokenMode
          ? TranslateString(10002, 'Stake tokens to earn BUFF')
          : TranslateString(320, 'Stake LP tokens to earn BUFF')}
      </Heading>
      {/* <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}> */}
      {/*   Farming rewards starts: Thu 12 August, 04:10:00 GTM+2, block 9952420 */}
      {/* </Heading> */}
      {/* <Text style={{ textAlign: 'center' }}><a href="https://bscscan.com/block/countdown/9952420" target="_blank" rel="noreferrer">https://bscscan.com/block/countdown/9952420</a></Text> */}
      {/* <Text> */}
      {/* &nbsp; */}
      {/* </Text> */}
      
      <Text fontSize="10px">
        1.99% transfer tax is automatically applied at each BUFF token transaction (not LPs)
      </Text>
      <Text>
        &nbsp;
      </Text>

      <Wrapper>
        {/* <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} /> */}
        <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      </Wrapper>
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/egg/8.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default Farms
