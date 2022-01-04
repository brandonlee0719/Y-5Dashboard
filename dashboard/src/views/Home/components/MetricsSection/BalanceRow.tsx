import React from 'react'
import styled from 'styled-components'

const BalanceRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }

  div:first-child {
    flex: 1;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
  }
`

export default BalanceRow
