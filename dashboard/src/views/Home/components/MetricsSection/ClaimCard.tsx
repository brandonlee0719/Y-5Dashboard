import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Heading, Button, Card, CardBody, CardHeader } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { FetchStatus, useClaimReward, usePendingBalance } from 'hooks/useReflection'
import tokens from 'config/constants/tokens'
import BalanceRow from './BalanceRow'
import IconedBalance from './IconedBalance'
import { BusdLogo, CryptLogo, EgcLogo, ReflectoLogo, RmtxLogo } from './TokenLogos'

const ClaimCard = () => {
    const { t } = useTranslation()
    const { account } = useWeb3React()

    const { balance: busdBalance, fetchStatus: busdFetchStatus } = usePendingBalance(tokens.busd.address)
    const { balance: egcBalance, fetchStatus: egcFetchStatus } = usePendingBalance(tokens.egc.address)
    const { balance: reflectoBalance, fetchStatus: reflectoFetchStatus } = usePendingBalance(tokens.reflecto.address)
    const { balance: cryptBalance, fetchStatus: cryptFetchStatus } = usePendingBalance(tokens.crypt.address)
    const { balance: rmtxBalance, fetchStatus: rmtxFetchStatus } = usePendingBalance(tokens.rmtx.address)

    const { onClaim } = useClaimReward()

    const handleClaim = async (tokenAddress: string) => {
        await onClaim(tokenAddress)
    }

    return (
        <Card style={{ flex: 1 }}>
            <CardHeader><Heading scale="lg">{t('Rewards Not Claimed')}</Heading></CardHeader>
            <CardBody>
                <BalanceRow>
                    <IconedBalance balance={busdBalance} decimals={18} fetched={busdFetchStatus === FetchStatus.SUCCESS}><BusdLogo /></IconedBalance>
                    <Button variant='primary' scale="sm" onClick={() => handleClaim(tokens.busd.address)}
                        disabled={!account || busdBalance.isEqualTo(BIG_ZERO) || busdFetchStatus !== FetchStatus.SUCCESS}>{t('Claim')}</Button>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={egcBalance} decimals={9} fetched={egcFetchStatus === FetchStatus.SUCCESS}><EgcLogo /></IconedBalance>
                    <Button variant='primary' scale="sm" onClick={() => handleClaim(tokens.egc.address)}
                        disabled={!account || egcBalance.isEqualTo(BIG_ZERO) || egcFetchStatus !== FetchStatus.SUCCESS}>{t('Claim')}</Button>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={reflectoBalance} decimals={9} fetched={reflectoFetchStatus === FetchStatus.SUCCESS}><ReflectoLogo /></IconedBalance>
                    <Button variant='primary' scale="sm" onClick={() => handleClaim(tokens.reflecto.address)}
                        disabled={!account || reflectoBalance.isEqualTo(BIG_ZERO) || reflectoFetchStatus !== FetchStatus.SUCCESS}>{t('Claim')}</Button>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={cryptBalance} decimals={9} fetched={cryptFetchStatus === FetchStatus.SUCCESS}><CryptLogo /></IconedBalance>
                    <Button variant='primary' scale="sm" onClick={() => handleClaim(tokens.crypt.address)}
                        disabled={!account || cryptBalance.isEqualTo(BIG_ZERO) || cryptFetchStatus !== FetchStatus.SUCCESS}>{t('Claim')}</Button>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={rmtxBalance} decimals={18} fetched={rmtxFetchStatus === FetchStatus.SUCCESS}><RmtxLogo /></IconedBalance>
                    <Button variant='primary' scale="sm" onClick={() => handleClaim(tokens.rmtx.address)}
                        disabled={!account || rmtxBalance.isEqualTo(BIG_ZERO) || rmtxFetchStatus !== FetchStatus.SUCCESS}>{t('Claim')}</Button>
                </BalanceRow>
            </CardBody>
        </Card>
    )
}

export default ClaimCard
