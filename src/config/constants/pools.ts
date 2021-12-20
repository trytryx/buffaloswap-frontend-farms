import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,‡
  //   tokenDecimals: 18,
  // },
  {
    sousId: 1,
    tokenName: 'BUSD',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x29B2717120236A8B26E4D62fF58Be84c319DDA5A', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.006',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BNB-BUSD',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BUSD
  },
  {
    sousId: 2,
    tokenName: 'BUSD',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0xc30d02e5d597841f868Ac88BDac8E73e000f5Fa5', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.006',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BNB-BUSD',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BUSD
  },
  {
    sousId: 3,
    tokenName: 'ADA',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x9c5D781A2041eE0D40029A34533190acE1F87CbB', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.002',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'ADA-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.ADA
  },
  {
    sousId: 4,
    tokenName: 'REEF',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x3c451eb19C649845AA298fB3c0baDd5e5D898d78', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had reef
      56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.08',
    sortOrder: 2,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'REEF-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.REEF
  },
  {
    sousId: 5,
    tokenName: 'GEM',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x571CCeE0078f96A387dF65E08F10283A4c1E8686', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had reef
      56: '0xbac1df744df160877cdc45e13d0394c06bc388ff', // GEM
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://nftmall.io/',
    harvest: true,
    tokenPerBlock: '0.021',
    sortOrder: 2,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'GEM-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.GEM
  },
  {
    sousId: 6,
    tokenName: 'ADA',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0xaA50A914318db3f82d2525d0048Bd76Cde868f8C', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.001',
    sortOrder: 2,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'ADA-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.ADA
  },
  {
    sousId: 7,
    tokenName: 'VDV',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x51CE77E8b139eA1385cd714215c6719Bc8255585', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0xe586a0af5f3844f1408fed1d284270827a116010', // bnb
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://vdvtoken.io/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 2,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 8,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'VDV-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.VDV
  },
// {
//   sousId: 8,
//   tokenName: 'BIRD',
//   stakingTokenName: QuoteToken.BUFF,
//   stakingTokenAddress: {
//     97: '',
//     56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
//   },
//   contractAddress: {
//     97: '',
//     56: '', // SmartChef
//   },
//   rewardTokenAddress: {
//     97: '', // DAI, didnt had reef
//     56: '0x7f1296e5aA692a98d86EaAe3ac1CD7723E74878d', // BIRD
//   },
//   poolCategory: PoolCategory.COMMUNITY,
//   projectLink: 'https://birdswap.com',
//   harvest: true,
//   tokenPerBlock: '0.021',
//   sortOrder: 2,
//   isFinished: false,
//   isComingSoon: false,
//   tokenDecimals: 18,
//   burnFee: 0,
//   weeklyroi: '0%',
//   apySymbolReward: 'BIRD-BNB',
//   apySymbolStaking: 'BUFF-BNB',
//   apyStakingQuoke: QuoteToken.CAKE,
//   apyRewardQuoke: QuoteToken.BIRD
// },
{
    sousId: 8,
    tokenName: 'BUSD',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x26C41e42A48f48Bdc763Cb0EC13Ca02436E75A5D', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BNB-BUSD',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BUSD
  },
  {
    sousId: 9,
    tokenName: 'ADA',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x575e18c47428dfff18a9fF1159DA25860C295628', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org/',
    harvest: true,
    tokenPerBlock: '0.0015',
    sortOrder: 2,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'ADA-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.ADA
  },

  {
    sousId: 10,
    tokenName: 'FLAT',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0xCd111D86D84aB9AFc8Cf54b5414C731B8aFD4585', // SmartChef
    },
    rewardTokenAddress: {
      97: '', // DAI, didnt had WBNB
      56: '0x41540ba32db90269bb72a7be1d4b1ee18f5544f1', // bnb
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://flatearthtoken.com/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'FLAT-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.FLAT
  },
  {
    sousId: 11,
    tokenName: 'PEAR',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x0F8e9Fd284c8174F5F7B985628aD5d5704647990', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0xdf7C18ED59EA738070E665Ac3F5c258dcc2FBad8', // pear
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://app.pearzap.com/?r=yvA3DAFy9f43y16a000bb72bD5397yyyycz03bFFf7',
    harvest: true,
    tokenPerBlock: '0.0025',
    sortOrder: 1,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'PEAR-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.PEAR
  },
  {
    sousId: 12,
    tokenName: 'BALPAC',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0x4D24751c5c73E5E09Ef99dE0275589001D2B2B3f', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0x83DD5794D844BB4bD630c2FAcC45A77729232991', // pear
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://alpaca.baby',
    harvest: true,
    tokenPerBlock: '142',
    sortOrder: 3,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BALPAC-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BALPAC
  },

  {
    sousId: 13,
    tokenName: 'BBQ',
    stakingTokenName: QuoteToken.BUFF,
    stakingTokenAddress: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5', // buff
    },
    contractAddress: {
      97: '',
      56: '0xD27eC6b3a0b17798A72283Fb55f7Dd972E25e808', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0xD9A88f9b7101046786490bAF433f0f6aB3D753E2', // pear
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://app.barbecueswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0243',
    sortOrder: 2,
    isFinished: false,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BBQ-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BBQ
  },

  {
    sousId: 14,
    tokenName: 'BABY',
    stakingTokenName: QuoteToken.BUFFREDBUFF,
    stakingTokenAddress: {
      97: '',
      56: '0xdc1dcdd2da156f60f2eca8966af01aadedf50751', // buff+redbuff
    },
    contractAddress: {
      97: '',
      56: '0x00464c89Fdbb40D1A24c4859EbFEfacddd32947B', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657', // baby
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://home.babyswap.finance/',
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BABY-BNB',
    apySymbolStaking: 'BUFF-REDBUFF',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BABY
  },
  {
    sousId: 15,
    tokenName: 'WBNB',
    stakingTokenName: QuoteToken.BUFFREDBUFF,
    stakingTokenAddress: {
      97: '',
      56: '0xdc1dcdd2da156f60f2eca8966af01aadedf50751', // buff+redbuff
    },
    contractAddress: {
      97: '',
      56: '0x94Aa2dA8A48EDdf35bEbcF1D5A1dB06789cAbCE3', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // bnb
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.buffaloswap.org',
    harvest: true,
    tokenPerBlock: '0.0000225',
    sortOrder: 1,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'BUFF-BNB',
    apySymbolStaking: 'BUFF-REDBUFF',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.BNB
  },
  {
    sousId: 16,
    tokenName: 'PEAR',
    stakingTokenName: QuoteToken.BUFFREDBUFF,
    stakingTokenAddress: {
      97: '',
      56: '0xdc1dcdd2da156f60f2eca8966af01aadedf50751', // redbuff+buff
    },
    contractAddress: {
      97: '',
      56: '0x8dCADC3A38B38b1F583cbb74737C343b0fc32F18', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0xdf7C18ED59EA738070E665Ac3F5c258dcc2FBad8', // pear
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://app.pearzap.com/?r=yvA3DAFy9f43y16a000bb72bD5397yyyycz03bFFf7',
    harvest: true,
    tokenPerBlock: '0.137',
    sortOrder: 1,
    isFinished: true,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'PEAR-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.PEAR
  },
  {
    sousId: 17,
    tokenName: 'MUFT',
    stakingTokenName: QuoteToken.BUFFREDBUFF,
    stakingTokenAddress: {
      97: '',
      56: '0xdc1dcdd2da156f60f2eca8966af01aadedf50751', // redbuff+buff
    },
    contractAddress: {
      97: '',
      56: '0x1c73f4d5aba96EDbf06EDB36C61386A064CB4a57', // SmartChef
    },
    rewardTokenAddress: {
      97: '', 
      56: '0x1d4a26a9d980afc2287dca15eb896a26384bac7c', // muft
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://manutdfantoken.app/',
    harvest: true,
    tokenPerBlock: '1388',
    sortOrder: 1,
    isFinished: false,
    isComingSoon: false,
    tokenDecimals: 18,
    burnFee: 0,
    weeklyroi: '0%',
    apySymbolReward: 'MUFT-BNB',
    apySymbolStaking: 'BUFF-BNB',
    apyStakingQuoke: QuoteToken.CAKE,
    apyRewardQuoke: QuoteToken.MUFT
  },
  

]

export default pools
