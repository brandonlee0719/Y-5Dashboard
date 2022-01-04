import React from 'react'
import { Heading, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import GradientLogo from '../GradientLogoSvg'

import YourWalletCard from './YourWalletCard'
import TotalEarnedCard from './TotalEarnedCard'
import ClaimCard from './ClaimCard'
import DistributedCard from './DistributedCard'

const Stats = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="64px" width="64px" mb="24px" />
      <Heading textAlign="center" scale="xl">
        {t('Y-5 Finance')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Multi Reflection Token')}
      </Heading>

      <Flex flexDirection={['column', null, null, 'row']} style={{ gap: '10px', width: '100%' }}>
        <YourWalletCard />
        <TotalEarnedCard />
        <ClaimCard />
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']} style={{ marginTop: '10px', width: '100%' }}>
        <DistributedCard />
      </Flex>
    </Flex>
  )
}

export default Stats
