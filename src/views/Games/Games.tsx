import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, Text} from '@pancakeswap-libs/uikit'

import useI18n from 'hooks/useI18n'

import Page from 'components/layout/Page'
import Hero from './components/Hero'
import Divider from './components/Divider'



const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  width: 100%
`




const Games: React.FC = () => {
  
  const TranslateString = useI18n()
 
  let {idGame}: {idGame: string} = useParams()
 
  console.log("> ",idGame)

  if (!idGame){
    idGame = 'roulette'
  }
  return (
    <>
      <Hero />
      <Wrapper>
        <iframe style={{ height: '100vh' }} width="100%" height="100%" frameBorder="0" title="games" src={`https://treasurekey.bet/${idGame}?partner=REDBUFF`} />
      </Wrapper>
    </>
  )
}

export default Games
