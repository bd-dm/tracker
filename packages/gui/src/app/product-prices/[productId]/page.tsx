import { api } from '../../../../common/api'
import { Chip, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { NavigationPage } from '../../../../common/enums/navigation'

export default async function ProductPrices ({ params: { productId } }: { params: { productId: string } }) {
  const products = await api.products.productsControllerFindAll()
  const product = await api.products.productsControllerFindOne(productId)
  const productPrices = await api.productPrices.productPricesControllerFindByProduct(productId)

  return (
    <Stack spacing={2}>
      <Stack direction={'row'} spacing={1}>
        {products.map(product => (
          <Link key={product.id} href={`/${NavigationPage.ProductPrices}/${product.id}`}>
            <Chip label={product.name} variant={product.id === productId ? 'filled' : 'outlined'} />
          </Link>
        ))}
      </Stack>

      <Stack spacing={3}>
        <Typography variant={'h4'}>{product.name}</Typography>

        <p>{JSON.stringify(productPrices)}</p>
      </Stack>
    </Stack>
  )
}
