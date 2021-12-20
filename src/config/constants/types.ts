import BigNumber from 'bignumber.js'

export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'BUFF' = 'BUFF',
  'EGG' = 'EGG',
  'ADA' = 'ADA',
  'REEF' = 'REEF',
  'GEM' = 'GEM',
  'VDV' = 'VDV',
  'BIRD' = 'BIRD',
  'EROS' = 'EROS',
  'FLAT' = 'FLAT',
  'PEAR' = 'PEAR',
  'BALPAC' = 'BALPAC',
  'BBQ' = 'BBQ',
  'BABY' = 'BABY',
  'BUFFREDBUFF' = 'BUFF-REDBUFF LP',
  'MUFT' = 'MUFT'
} 

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  97?: string
  56: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: Address
  contractAddress: Address
  rewardTokenAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  isComingSoon?: boolean
  tokenDecimals: number
  burnFee: number
  weeklyroi: string
  apySymbolReward: string
  apySymbolStaking: string
  apyStakingQuoke: QuoteToken
  apyRewardQuoke: QuoteToken
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}

export interface PresaleConfig {
  tokensLeft: BigNumber
  tokensUnclaimed: BigNumber
  userAllowance: BigNumber
  busdBalance: BigNumber
  cakeBalance: BigNumber
}

