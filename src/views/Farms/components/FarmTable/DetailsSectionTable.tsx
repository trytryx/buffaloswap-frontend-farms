import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSectionTable: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
 
  const LPLink = lpLabel === 'BABY-BNB' 
    ? 'https://exchange.babyswap.finance/#/add/0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c' 
    : `https://dex.buffaloswap.org/#/add/${liquidityUrlPathParts}`

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal
          href={
            isTokenOnly
              ? `https://dex.buffaloswap.org/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : LPLink
          }
        >
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>

      )}
      {(!isTokenOnly && !removed) && (
        <Flex justifyContent="space-between">
          <Text>LP Value:</Text>
          <Text>{lpValueFormated}</Text>
        </Flex>
      )}

      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSectionTable
