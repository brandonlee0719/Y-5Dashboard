import React from 'react'
import { Heading, Card, CardBody, CardHeader } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { FetchStatus, useTotalEarnedBalance } from 'hooks/useReflection'
import tokens from 'config/constants/tokens'
import { BIG_ZERO } from 'utils/bigNumber'
import BalanceRow from './BalanceRow'
import IconedBalance from './IconedBalance'
import { BusdLogo, CryptLogo, EgcLogo, ReflectoLogo, RmtxLogo } from './TokenLogos'

const TotalEarnedCard = () => {
    const { t } = useTranslation()

    const { balance: busdBalance, fetchStatus: busdFetchStatus } = useTotalEarnedBalance(tokens.busd.address)
    const { balance: egcBalance, fetchStatus: egcFetchStatus } = useTotalEarnedBalance(tokens.egc.address)
    const { balance: reflectoBalance, fetchStatus: reflectoFetchStatus } = useTotalEarnedBalance(tokens.reflecto.address)
    const { balance: cryptBalance, fetchStatus: cryptFetchStatus } = useTotalEarnedBalance(tokens.crypt.address)
    const { balance: rmtxBalance, fetchStatus: rmtxFetchStatus } = useTotalEarnedBalance(tokens.rmtx.address)

    return (
        <Card style={{ flex: 1 }}>
            <CardHeader><Heading scale="lg">{t('Total Earned')}</Heading></CardHeader>
            <CardBody>
                <BalanceRow>
                    <IconedBalance balance={busdBalance} decimals={18} fetched={busdFetchStatus === FetchStatus.SUCCESS}><BusdLogo /></IconedBalance>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={egcBalance} decimals={9} fetched={egcFetchStatus === FetchStatus.SUCCESS}><EgcLogo /></IconedBalance>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={reflectoBalance} decimals={9} fetched={reflectoFetchStatus === FetchStatus.SUCCESS}><ReflectoLogo /></IconedBalance>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={cryptBalance} decimals={9} fetched={cryptFetchStatus === FetchStatus.SUCCESS}><CryptLogo /></IconedBalance>
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={rmtxBalance} decimals={18} fetched={rmtxFetchStatus === FetchStatus.SUCCESS}><RmtxLogo /></IconedBalance>
                </BalanceRow>
            </CardBody>
        </Card>
    )
}

export default TotalEarnedCard
