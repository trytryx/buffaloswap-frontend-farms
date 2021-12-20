import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import HowItWorks from './components/HowItWorks'
import NftList from './components/NftList'
import Mint from './components/Mint'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Nft = () => {
  const TranslateString = useI18n();
  const nft = {
    name: 'Drizzle',
    description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
    previewImage: 'drizzle-preview.png',
    blurImage: 'drizzle-blur.png',
    sortOrder: 999,
    bunnyId: 1,
  };

  return (
    <NftProvider>
      <Page>
        <StyledHero>
          <Heading as="h1" size="xxl" color="secondary" mb="24px">
            NFTs
          </Heading>
          <Heading as="h2" size="lg" color="secondary">
            {TranslateString(999, 'Trade in for CAKE, or keep for your collection!')}
          </Heading>
        </StyledHero>
        <NftInfo />
        <NftList />
        {/* <Mint nft={} /> */}
        {/* <HowItWorks /> */}
      </Page>
    </NftProvider>
  )
}

export default Nft
