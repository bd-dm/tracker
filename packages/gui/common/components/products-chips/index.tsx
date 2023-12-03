import { type FC } from 'react'
import { type EntityProduct } from '@tracker/api-client'
import Link from 'next/link'
import { NavigationPage } from '../../enums/navigation'
import { Chip, Stack } from '@mui/material'
import styles from './index.module.css'

interface ProductsChipsProps {
  products: EntityProduct[]
  getIsActive?: (product: EntityProduct) => boolean
}

export const ProductsChips: FC<ProductsChipsProps> = ({ products, getIsActive = () => false }) => {
  return (
    <Stack direction={'row'} spacing={1} useFlexGap flexWrap="wrap">
      {products.map(product => (
        <Link key={product.id} href={`/${NavigationPage.ProductPrices}/${product.id}`}>
          <Chip
            classes={{ root: styles.chip, label: styles.chipLabel }}
            label={product.name}
            variant={getIsActive(product) ? 'filled' : 'outlined'}
          />
        </Link>
      ))}
    </Stack>
  )
}
