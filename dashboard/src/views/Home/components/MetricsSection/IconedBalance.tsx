import React from 'react'
import { Heading, Flex, FlexProps, Skeleton } from '@pancakeswap/uikit'
import { getFullDisplayBalance, formatBigNumber, getBalanceNumber, formatNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'

interface IconedBalanceProps extends FlexProps {
  balance: BigNumber
  fetched: boolean
  decimals: number
}

const IconedBalance: React.FC<IconedBalanceProps> = ({
  children,
  balance,
  fetched,
  decimals
}) => {

  return (
    <Flex
      width="fit-content"
      alignItems="center"
    >
      {children}
      {fetched ? (
        <Heading scale="xl">{formatNumber(Number(getBalanceNumber(balance, decimals)), 0, 4)}</Heading>
      ) : (
        <Skeleton height="24px" width="80px" />

      )}
    </Flex>
  )
}

export default IconedBalance
