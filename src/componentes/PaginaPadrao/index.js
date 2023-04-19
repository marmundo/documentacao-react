import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import Rodape from '../Rodape'

export default function PaginaPadrao() {
  return (
    <>
      <Banner />
      <Outlet />
      <Rodape />
    </>
  )
}
