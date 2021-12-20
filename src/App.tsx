import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'

// import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// const Presale = lazy(() => import('./views/Presale'))

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))

const Pools = lazy(() => import('./views/Pools'))

// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))
const Referrals = lazy(() => import('./views/Referrals'))

const Chain = lazy(() => import('./views/Chain'))

const Friends = lazy(() => import('./views/Friends'))


const Games = lazy(() => import('./views/Games'))

const Nft = lazy(() => import('./views/Nft'))

const IBO = lazy(() => import('./views/IBO'))


// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

 
  // Save referral url
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (ref) {
      localStorage.setItem('ref', ref)
    }
  }, [])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/staking">
              <Farms tokenMode />
            </Route>
            <Route path="/referrals">
             <Referrals />
            </Route>

            <Route path="/IBO">
             <IBO />
            </Route>

            {/* <Route path="/presale"> */}
            {/*   <Presale /> */}
            {/* </Route> */}
             <Route path="/grasslands">
              <Pools /> 
             </Route>

            <Route path="/howto">
              <Chain /> 
            </Route>

            <Route path="/ranch">
              <Friends /> 
            </Route>

             

            <Route path="/games/:idGame" >
              <Games /> 
            </Route>

            <Route path="/games" >
              <Games /> 
            </Route>

            <Route path="/nfts">
              <Nft />
            </Route>
             

            {/* <Route path="/lottery"> */}
            {/*  <Lottery /> */}
            {/* </Route> */}
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      {/* <NftGlobalNotification /> */}
    </Router>
  )
}

export default React.memo(App)
