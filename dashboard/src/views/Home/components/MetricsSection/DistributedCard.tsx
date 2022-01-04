import React from 'react'
import { Heading, Card, CardBody, CardHeader } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import useDistributedBalance, { FetchStatus } from 'hooks/useReflection'
import tokens from 'config/constants/tokens'
import BalanceRow from './BalanceRow'
import IconedBalance from './IconedBalance'
import { BusdLogo, CryptLogo, EgcLogo, ReflectoLogo, RmtxLogo } from './TokenLogos'
import CopyAddress from './CopyAddress'

const DistributedCard = () => {
    const { t } = useTranslation()

    const { balance: busdBalance, fetchStatus: busdFetchStatus } = useDistributedBalance(tokens.busd.address)
    const { balance: egcBalance, fetchStatus: egcFetchStatus } = useDistributedBalance(tokens.egc.address)
    const { balance: reflectoBalance, fetchStatus: reflectoFetchStatus } = useDistributedBalance(tokens.reflecto.address)
    const { balance: cryptBalance, fetchStatus: cryptFetchStatus } = useDistributedBalance(tokens.crypt.address)
    const { balance: rmtxBalance, fetchStatus: rmtxFetchStatus } = useDistributedBalance(tokens.rmtx.address)

    return (
        <Card style={{ flex: 1 }}>
            <CardHeader>
                <Heading scale="lg">{t('Reward Distributed To Holders')}</Heading>
            </CardHeader>
            <CardBody>
                <BalanceRow>
                    <IconedBalance balance={busdBalance} decimals={18} fetched={busdFetchStatus === FetchStatus.SUCCESS}><BusdLogo /></IconedBalance>
                    <CopyAddress account="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" />
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={egcBalance} decimals={9} fetched={egcFetchStatus === FetchStatus.SUCCESS}><EgcLogo /></IconedBalance>
                    <CopyAddress account="0xC001BBe2B87079294C63EcE98BdD0a88D761434e" />
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={reflectoBalance} decimals={9} fetched={reflectoFetchStatus === FetchStatus.SUCCESS}><ReflectoLogo /></IconedBalance>
                    <CopyAddress account="0xEA3C823176D2F6feDC682d3cd9C30115448767b3" />
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={cryptBalance} decimals={9} fetched={cryptFetchStatus === FetchStatus.SUCCESS}><CryptLogo /></IconedBalance>
                    <CopyAddress account="0xDa6802BbEC06Ab447A68294A63DE47eD4506ACAA" />
                </BalanceRow>
                <BalanceRow>
                    <IconedBalance balance={rmtxBalance} decimals={18} fetched={rmtxFetchStatus === FetchStatus.SUCCESS}><RmtxLogo /></IconedBalance>
                    <CopyAddress account="0x0c01099f3d4c920504E577bd7617F0D7c53cD8Df" />
                </BalanceRow>
            </CardBody>
        </Card>
    )
}

export default DistributedCard
