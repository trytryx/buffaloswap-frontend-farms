import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton } from '@pancakeswap-libs/uikit'
import { ViewMode } from '../types'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-left: 16px;
  margin-top: 4px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
    padding-left: 0px;
    margin-top: 4px;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <IconButton style={{width : '20px', height:'20px'}} variant="text" size="md" id="clickFarmCardView" onClick={() => handleToggle(ViewMode.CARD)}>
        <CardViewIcon color={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'} />
      </IconButton>
      <IconButton style={{width : '20px', height:'20px', marginRight: '20px'}} variant="text" size="md" id="clickFarmTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
        <ListViewIcon color={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'} />
      </IconButton>
    </Container>
  )
}

export default ToggleView
