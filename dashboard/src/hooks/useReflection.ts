import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getY5Contract } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { DEFAULT_GAS_LIMIT } from 'config'
import useRefresh from './useRefresh'
import { useY5 } from './useContract'

type UseTokenBalanceState = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useDistributedBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getY5Contract()
      try {
        const res = await contract._rewardInfo(tokenAddress)
        setBalanceState({ balance: new BigNumber(res.distributed.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    fetchBalance()
  }, [account, tokenAddress, fastRefresh, SUCCESS, FAILED])

  return balanceState
}

export const useTotalEarnedBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getY5Contract()
      try {
        const res = await contract._holderInfo(account, tokenAddress)
        setBalanceState({ balance: new BigNumber(res.earned.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    } else {
      setBalanceState((prev) => ({
        ...prev,
        fetchStatus: NOT_FETCHED,
      }))
    }
  }, [account, tokenAddress, fastRefresh, SUCCESS, FAILED, NOT_FETCHED])

  return balanceState
}

export const usePendingBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getY5Contract()
      try {
        const res = await contract.pendingRewards(account, tokenAddress)
        setBalanceState({ balance: new BigNumber(res.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    } else {
      setBalanceState((prev) => ({
        ...prev,
        fetchStatus: NOT_FETCHED,
      }))
    }
  }, [account, tokenAddress, fastRefresh, SUCCESS, FAILED, NOT_FETCHED])

  return balanceState
}

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const useClaimReward = () => {
  const y5Contract = useY5()

  const handleClaim = useCallback(
    async (tokenAddress: string) => {
      const gasPrice = getGasPrice()
      const tx = await y5Contract.claimRewards(tokenAddress, { ...options, gasPrice })
      const receipt = await tx.wait()
      const txHash = receipt.status
      console.info(txHash)
    },
    [y5Contract],
  )

  return { onClaim: handleClaim }
}

export default useDistributedBalance
