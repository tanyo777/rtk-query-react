import React from 'react'
import Navigation from '../components/navigation/Navigation'
import { useSelector } from 'react-redux'

interface MainLayoutProps {
  children: JSX.Element
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { themeColor } = useSelector((state: any) => state.theme)
  return (
    <div style={{ background: themeColor }}>
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
