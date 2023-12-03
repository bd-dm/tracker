import { api } from '../../../common/api'
import { Chip, Stack } from '@mui/material'
import Link from 'next/link'
import { NavigationPage } from '../../../common/enums/navigation'

export default async function ProductPrices () {
  const products = await api.products.productsControllerFindAll()

  return (
    <Stack direction={'row'} spacing={1}>
      {products.map(product => (
        <Link key={product.id} href={`/${NavigationPage.ProductPrices}/${product.id}`}>
          <Chip label={product.name} variant={'outlined'} />
        </Link>
      ))}
    </Stack>
  )
}
