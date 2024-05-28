import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useHouseholdStore } from '~/app/householdStore'
import { useResidentsStore } from '../residents/residentsStore'
import { useAuthStore } from './authStore'
import { useTemporaryStore } from '../temporary/temporaryStore'
import { useEffectOnce } from 'usehooks-ts'

const Prefetch = () => {
  const [getTamTrus, getTamVangs] = useTemporaryStore(state => [
    state.getTamTrus,
    state.getTamVangs
  ])

  useEffectOnce(() => {
    getTamTrus()
    getTamVangs()
  })

  return <Outlet />
}

export default Prefetch
