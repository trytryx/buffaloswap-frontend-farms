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
        href: '/#',
      },
      {
        label: 'RedBuff',
        href: '/#'
      }
    ]
  },
  {
    label: 'Grasslands',
    icon: 'SunIcon',
    href: '/#',
  },
  {
    label: 'Games',
    icon: 'GamesIcon',
    href: '/#',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
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
        href: '/#',
      },
      {
        label: 'Docs',
        href: '/#',
      },
      {
        label: 'Roadmap',
        href: '/#',
      },
    ],
  },

]

export default config

