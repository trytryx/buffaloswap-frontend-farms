import React from 'react'
import Ticker from 'react-ticker'
import useMirrorData from 'hooks/useMirrorData'
import { formatPriceChange } from 'utils/formatPrices';
import useTheme from 'hooks/useTheme';

const TickerBar = () => {
  const { data } = useMirrorData()
  const { isDark } = useTheme()

  if (!data?.assets) {
    return <div style={{ marginBottom: 48 }}/>
  }

  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ whiteSpace: 'nowrap', color: isDark ? 'white' : 'black' }}>
        <Ticker>
          {() => 
            data.assets
              .filter(asset => !!asset.prices.oraclePrice)
              .map(asset => 
                <span style={{ marginLeft: 18 }}>
                  <strong>{asset.symbol}</strong> {formatPriceChange(asset.prices.oraclePrice, asset.prices.oraclePriceAt)}
                </span>
              )
          }
        </Ticker>
      </p>
    </div>
  )
}

export default TickerBar
