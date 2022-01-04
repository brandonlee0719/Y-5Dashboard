import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Y5Logo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image width="128px" height="128px" href="/images/Y-5.png" />
    </Svg>
  )
}

export const BusdLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96px" height="96px" href="/images/BUSD.png" />
    </Svg>
  )
}

export const EgcLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64px" height="64px" href="/images/EGC.png" />
    </Svg>
  )
}

export const ReflectoLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64px" height="64px" href="/images/REFLECTO.png" />
    </Svg>
  )
}

export const CryptLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64px" height="64px" href="/images/CRYPT.png" />
    </Svg>
  )
}

export const RmtxLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64px" height="64px" href="/images/RMTX.png" />
    </Svg>
  )
}

export default Y5Logo
