'use client'

import { type FC } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { NavigationPage } from '../../enums/navigation'
import StoreIcon from '@mui/icons-material/Store'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BarChartIcon from '@mui/icons-material/BarChart'

export const NavigationMenu: FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const page = pathname.slice(1)

  return (
    <BottomNavigation
      value={page}
      onChange={(_event, page) => {
        router.push(`/${page}`)
      }}
    >
      <BottomNavigationAction label="Stores" value={NavigationPage.Stores} icon={<StoreIcon/>} />
      <BottomNavigationAction label="Products" value={NavigationPage.Products} icon={<ShoppingCartIcon/>} />
      <BottomNavigationAction label="Product prices" value={NavigationPage.ProductPrices} icon={<BarChartIcon/>} />
    </BottomNavigation>
  )
}
