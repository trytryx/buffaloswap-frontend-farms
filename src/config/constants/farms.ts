import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 27,
    risk: 5,
    lpSymbol: 'REDBUFF-BUFF',
    lpAddresses: {
      97: '',
      56: '0xdc1dcdd2da156f60f2eca8966af01aadedf50751',
    },
    tokenSymbol: 'BUFF',
    tokenAddresses: {
      97: '',
      56: '0x9eC132c19f2c35272DE3f81a75D674752D952DA8',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  {
    pid: 0,
    risk: 10,
    lpSymbol: 'BUFF-BUSD',
    lpAddresses: {
      97: '',
      56: '0x3eFbFA0c13DF62b657a079A25D0AEB1395eF4b9d',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 10,
    lpSymbol: 'BUFF-BNB',
    lpAddresses: {
      97: '',
      56: '0xfdCF6F480838e7b12f091dACa213Ef571782b79C',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 29,
    risk: 5,
    lpSymbol: 'BUFF-MUFT',
    lpAddresses: {
      97: '',
      56: '0xd189bCF13b9A824014A3c446dbfCd4E3f77b938f',
    },
    tokenSymbol: 'MUFT',
    tokenAddresses: {
      97: '',
      56: '0x1d4a26a9d980afc2287dca15eb896a26384bac7c',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  {
    pid: 30,
    risk: 5,
    lpSymbol: 'BUFF-DEP',
    lpAddresses: {
      97: '',
      56: '0xc8BFAb92bA1556Bddb7A5b34b520fCcd8577Fe34',
    },
    tokenSymbol: 'DEP',
    tokenAddresses: {
      97: '',
      56: '0xcaF5191fc480F43e4DF80106c7695ECA56E48B18',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'BUFF-VDV',
    lpAddresses: {
      97: '',
      56: '0x1148342728D6c086023D7D8547ff10E7F61E9A2B',
    },
    tokenSymbol: 'VDV',
    tokenAddresses: {
      97: '',
      56: '0xe586a0af5f3844f1408fed1d284270827a116010',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  {
    pid: 15,
    risk: 10,
    lpSymbol: 'BUFF-BABY',
    lpAddresses: {
      97: '',
      56: '0xAA013abC3771e7523CCB8741654b2fACfe82D9E9',
    },
    tokenSymbol: 'BABY',
    tokenAddresses: {
      97: '',
      56: '0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
   },
   {
    pid: 26,
    risk: 10,
    lpSymbol: 'BUFF-BALPAC',
    lpAddresses: {
      97: '',
      56: '0x89faca17580fc1756ae1598af9e655d0266a313d',
    },
    tokenSymbol: 'BALPAC',
    tokenAddresses: {
      97: '',
      56: '0x83dd5794d844bb4bd630c2facc45a77729232991',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
   },
  {
   pid: 24,
   risk: 10,
   lpSymbol: 'BUFF-DOT',
   lpAddresses: {
     97: '',
     56: '0xBA122Be0EF4700FB66564eF359b09BAD3c8cAA54',
   },
   tokenSymbol: 'DOT',
   tokenAddresses: {
     97: '',
     56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
   },
   quoteTokenSymbol: QuoteToken.CAKE,
   quoteTokenAdresses: contracts.cake,
 },
 
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'BUFF-EROS',
    lpAddresses: {
      97: '',
      56: '0x562Ad72355E3F3B4C825B65B01103701A129d5E1',
    },
    tokenSymbol: 'EROS',
    tokenAddresses: {
      97: '',
      56: '0xe0cA4724Bc8B97B259d25596ee3CfAb816629baD',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'BUFF-GEM',
    lpAddresses: {
      97: '',
      56: '0x01080961faf3edb84ce87bded92339187b9e5b04',
    },
    tokenSymbol: 'GEM',
    tokenAddresses: {
      97: '',
      56: '0xbac1df744df160877cdc45e13d0394c06bc388ff',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    
  },
  
  {
    pid: 1,
    risk: 10,
    isTokenOnly: true,
    lpSymbol: 'BUFF',
    lpAddresses: {
      97: '',
      56: '0x3eFbFA0c13DF62b657a079A25D0AEB1395eF4b9d', // BUFF-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
   pid: 13,
   risk: 10,
   lpSymbol: 'BUFF-REEF',
   lpAddresses: {
     97: '',
     56: '0x998A63c8cA20459feE150e390d5a491Ef8fb4d6d',
   },
   tokenSymbol: 'REEF',
   tokenAddresses: {
     97: '',
     56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
   },
   quoteTokenSymbol: QuoteToken.CAKE,
   quoteTokenAdresses: contracts.cake,
 },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'ETH-BNB',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'USDT-BUSD',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'ADA-BNB',
    lpAddresses: {
     97: '',
     56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
     97: '',
     56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'BTCB-BNB',
    lpAddresses: {
     97: '',
     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
     97: '',
     56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'ADA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
 {
   pid: 9,
   risk: 5,
   lpSymbol: 'ETH',
   isTokenOnly: true,
   lpAddresses: {
     97: '',
     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
   },
   tokenSymbol: 'ETH',
   tokenAddresses: {
     97: '',
     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
  },
 {
   pid: 10,
   risk: 5,
   lpSymbol: 'BTCB',
   isTokenOnly: true,
   lpAddresses: {
     97: '',
     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
   },
   tokenSymbol: 'BTCB',
   tokenAddresses: {
     97: '',
     56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
 {
   pid: 11,
   risk: 5,
   lpSymbol: 'REEF-BNB',
   lpAddresses: {
     97: '',
     56: '0xd63b5CecB1f40d626307B92706Df357709D05827',
   },
   tokenSymbol: 'REEF',
   tokenAddresses: {
     97: '',
     56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
 {
   pid: 12,
   risk: 5,
   lpSymbol: 'REEF',
   isTokenOnly: true,
   lpAddresses: {
     97: '',
     56: '0xd63b5CecB1f40d626307B92706Df357709D05827',
   },
   tokenSymbol: 'REEF',
   tokenAddresses: {
     97: '',
     56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
 {
   pid: 14,
   risk: 5,
   lpSymbol: 'BABY-BNB',
   lpAddresses: {
     97: '',
     56: '0x36aE10A4d16311959b607eE98Bc4a8A653A33b1F',
   },
   tokenSymbol: 'BABY',
   tokenAddresses: {
     97: '',
     56: '0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'GEM-BNB',
    lpAddresses: {
      97: '',
      56: '0x8947C3a24d51E104DDBead2d864efAe7920B30E5',
    },
    tokenSymbol: 'GEM',
    tokenAddresses: {
      97: '',
      56: '0xbac1df744df160877cdc45e13d0394c06bc388ff',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    
  },
  {
    pid: 20,
    risk: 5,
    lpSymbol: 'EROS-BNB',
    lpAddresses: {
      97: '',
      56: '0x35bEF07CC5F9babD66dF2C979300dcE35926bb77',
    },
    tokenSymbol: 'EROS',
    tokenAddresses: {
      97: '',
      56: '0xe0cA4724Bc8B97B259d25596ee3CfAb816629baD',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    
  },
  {
    pid: 21,
    risk: 5,
    lpSymbol: 'VDV-BNB',
    lpAddresses: {
      97: '',
      56: '0x5d411b470C5F1F2194dcFB6f6862bE4C34787058',
    },
    tokenSymbol: 'VDV',
    tokenAddresses: {
      97: '',
      56: '0xe586a0af5f3844f1408fed1d284270827a116010',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    
  },
  {
   pid: 23,
   risk: 5,
   lpSymbol: 'DOT-BNB',
   lpAddresses: {
     97: '',
     56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
   },
   tokenSymbol: 'DOT',
   tokenAddresses: {
     97: '',
     56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
 {
   pid: 22,
   risk: 5,
   lpSymbol: 'DOT',
   isTokenOnly: true,
   lpAddresses: {
     97: '',
     56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
   },
   tokenSymbol: 'DOT',
   tokenAddresses: {
     97: '',
     56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
 },
 {
  pid: 25,
  risk: 5,
  lpSymbol: 'BALPAC-BNB',
  lpAddresses: {
    97: '',
    56: '0x9753ce24d009AD6810B6e51fbf7344bcF0508658',
  },
  tokenSymbol: 'BALPAC',
  tokenAddresses: {
    97: '',
    56: '0x83dd5794d844bb4bd630c2facc45a77729232991',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
 },
// {
//  pid: 28,
//   risk: 5,
//    lpSymbol: 'OLIVE',
//    isTokenOnly: true,
//    lpAddresses: {
//      97: '',
//      56: '0x51123Dd7BF791929BBfA75E913f7632A0eF1B82c',
 //   },
 //   tokenSymbol: 'OLIVE',
 //   tokenAddresses: {
 //     97: '',
 //     56: '0x617724974218A18769020A70162165A539c07E8a',
 //   },
 //   quoteTokenSymbol: QuoteToken.BNB,
 //   quoteTokenAdresses: contracts.wbnb,
 //  },
 
 


]

export default farms
