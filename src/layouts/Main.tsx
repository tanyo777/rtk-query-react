import React from 'react'
import Navigation from '../components/navigation/Navigation'

interface MainLayoutProps {
  children: JSX.Element
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
