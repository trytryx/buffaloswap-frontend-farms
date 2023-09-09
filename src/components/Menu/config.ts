import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    items: [
      {
        label: 'Buff',
        href: 'https://www.buffaloswap.network',     
      },
      {
        label: 'Buffs',
        href: 'https://buffaloswap.network',     
      },
    ] 
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    items: [
      {
        label: 'Swap',
        href: 'https://buffaloswap.network',     
      },
      {
        label: 'Liquidity',
        href: 'https://buffaloswap.network',     
      },
    ] 
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    items: [
      {
        label: 'Buff',
        href: '/#',
      } ,
      {
        label: 'Buffs',
        href: '/#'
      },
    ]
    
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Buff',
        href: '/staking',
      },
      {
        label: 'RedBuff',
        href: 'https://red.buffaloswap.org/staking'
      }
    ]
  },
  {
    label: 'Grasslands',
    icon: 'SunIcon',
    href: '/grasslands',
  },
  {
    label: 'IBO - REDBUFF',
    icon: 'ChainIcon',
    href: '/IBO',
  },
  {
    label: 'Games',
    icon: 'GamesIcon',
    href: '/games',
  },
  {
    label: 'NFTs',
    icon: 'NftIcon',
    href: '/nfts',
  },
  {
    label: 'Ranch',
    icon: 'MoonIcon',
    href: '/ranch',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
     label: 'Audits / KYC',
     icon: 'ShieldIcon',
     items: [
          {
          label: 'Team KYC SolidProof',
          href: 'https://github.com/solidproof/kyc-certificates/blob/main/KYC_Certificate_Buffalo_Token.png'
          },
          {
           label: 'SolidProof (Audit)',
           href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_BuffaloToken.pdf'
         }, 
         {
           label: 'RugDoc (Review)',
           href: 'https://rugdoc.io/project/buffalo-swap/'
         },
         {
           label: 'Jago (Review)',
           href: 'https://jagosafer.io/buffalo-swap'
         },
        
      ]
  },
  
  {
    label: 'Price Charts',
    icon: 'ChartIcon',
    items: [
      {
        label:  'Nomics',
        href:   'https://nomics.com/assets/buff2-buffalo-swap',
      },
      {
        label:  'DexGuru',
        href:   'https://dex.guru/token/0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5-bsc',
      },
      {
        label:  'DexTools',
        href:   'https://www.dextools.io/app/pancakeswap/pair-explorer/0xfdcf6f480838e7b12f091daca213ef571782b79c',
      },
      
      {
        label:  'PooCoin',
        href:   'https://poocoin.app/tokens/0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5',
      },
      {
        label: 'vfat.tools',
        href: 'https://vfat.tools/bsc/buffaloswap/',
      }
      
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/address/0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5',
      },
     {
       label: 'CoinGecko',
       href: 'https://www.coingecko.com/en/coins/buffalo-swap',
     },
      {
       label: 'CoinMarketCap',
       href: 'https://coinmarketcap.com/currencies/buffaloswap/',
     },
    ],
  },
  {
    label: 'BSC & Howto',
    icon: 'ChainIcon',
    href: '/howto',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: '* Anti Whale',
        href: '#',
      },
      {
        label: '* TimeLock',
        href: '#',
      },
      {
        label: '* Automatic LP',
        href: '#',
      },
      {
        label: '* Max Supply',
        href: '#',
      },
      {
        label: '* Referral Program',
        href: '#',
      },
      {
        label: '* No Harvest Lockup',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/buffaloswap',
      },
      {
        label: 'Docs',
        href: 'https://buffaloswap.gitbook.io/buffaloswap/',
      },
      {
        label: 'Roadmap',
        href: 'https://buffaloswap.gitbook.io/buffaloswap/roadmap',
      },
    ],
  },

]

export default config

