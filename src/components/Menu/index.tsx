import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, usePriceCakeBusdB } from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'


const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const cakePriceUsdB = usePriceCakeBusdB()


  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      cakePriceUsdB={cakePriceUsdB.toNumber()}
      links={config}
      priceLink="https://bscscan.com/address/0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C"
      priceLinkB="https://bscscan.com/address/0x48bf0Dde64cE7AF1E9031cC68D078CDfD960928C"
      
      {...props}
    />
  )
}

export default Menu
