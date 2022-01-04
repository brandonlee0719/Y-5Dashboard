import React from 'react'
import { Heading, Card, CardBody, CardHeader } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance, { FetchStatus } from 'hooks/useTokenBalance'
import tokens from 'config/constants/tokens'
import BalanceRow from './BalanceRow'
import IconedBalance from './IconedBalance'
import Y5Logo, { BusdLogo, CryptLogo, EgcLogo, ReflectoLogo, RmtxLogo } from './TokenLogos'

const YourWalletCard = () => {
    const { t } = useTranslation()
    const { balance: y5Balance, fetchStatus: y5FetchStatus } = useTokenBalance(tokens.y5.address)
    const { balance: busdBalance, fetchStatus: busdFetchStatus } = useTokenBalance(tokens.busd.address)
    const { balance: egcBalance, fetchStatus: egcFetchStatus } = useTokenBalance(tokens.egc.address)
    const { balance: reflectoBalance, fetchStatus: reflectoFetchStatus } = useTokenBalance(tokens.reflecto.address)
    const { balance: cryptBalance, fetchStatus: cryptFetchStatus } = useTokenBalance(tokens.crypt.address)
    const { balance: rmtxBalance, fetchStatus: rmtxFetchStatus } = useTokenBalance(tokens.rmtx.address)

    return (
        <Card style={{ flex: 1 }}>
            <CardHeader>
                <Heading scale="lg">{t('Your Wallet')}</Heading>
            </CardHeader>
            <CardBody>
                <BalanceRow>
                    <IconedBalance balance={y5Balance} decimals={18} fetched={y5FetchStatus === FetchStatus.SUCCESS}><Y5Logo /></IconedBalance>
                </BalanceRow>
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

export default YourWalletCard
