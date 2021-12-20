import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'

interface TextProps {
  isDisabled?: boolean
  fontSize?: string
  color?: string
}

interface BalanceProps extends TextProps {
  value?: number
  decimals?: number
  unit?: string
}

// const StyledText = styled(Text)<TextProps>`
//  color: ${({ isDisabled, color, theme }) => (isDisabled ? theme.colors.textDisabled : color)};
// `
const StyledText = styled(Text)<TextProps>`
 color: 'blue';
`


const Balance: React.FC<BalanceProps> = ({ value, fontSize, color, decimals, isDisabled, unit }) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <StyledText bold fontSize={fontSize} isDisabled={isDisabled}>
      <span style={{ color: 'rgb(255, 255, 255)' }}>
      <CountUp start={previousValue.current} end={value} decimals={decimals} duration={1} separator="," />
      {value && unit && <span>{unit}</span>}
      </span>
    </StyledText>
  )
}

Balance.defaultProps = {
  fontSize: '32px',
  isDisabled: false,
  color: 'text',
  decimals: 3,
}

export default Balance
