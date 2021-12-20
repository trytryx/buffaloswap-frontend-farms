import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig , PresaleConfig} from 'config/constants/types'

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  // quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  buffaloPerBlock?: number
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
  lpTokenBalance?: BigNumber
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export type Presale = PresaleConfig

export interface PresaleState {
  data: Presale
}
// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
  presale: PresaleState
}
