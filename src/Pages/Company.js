import React from 'react'
import Dashboard from '../components/Dashboard'
import Hero from '../components/Hero'
import Transfer from '../components/Transfer'
import Debitcard from '../components/Debitcard'
import RegistrationDetails from '../components/RegistrationDetails'

const Company = () => {
  return (
    <div>
        <Hero />
        <Dashboard />
        <Transfer />
        <Debitcard />
        <RegistrationDetails />
    </div>
  )
}

export default Company