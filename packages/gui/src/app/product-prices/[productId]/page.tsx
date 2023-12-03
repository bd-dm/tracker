import { api } from '../../../../common/api'
import { Chip, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { NavigationPage } from '../../../../common/enums/navigation'
import { PricesChart } from '../../../../common/components/prices-chart'

export default async function ProductPrices ({ params: { productId } }: { params: { productId: string } }) {
  const products = await api.products.productsControllerFindAll()
  const product = await api.products.productsControllerFindOne(productId)
  const productPrices = await api.productPrices.productPricesControllerFindByProduct(productId)

  const getDateString = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = ('0' + date.getDate().toString()).slice(-2)

    return `${day}-${month}-${year}`
  }

  const datesPrices: Record<string, number> = {}
  productPrices.forEach(productPrice => {
    const dateString = getDateString(productPrice.createdAt)
    const price = productPrice.price

    if (datesPrices[dateString] === undefined || datesPrices[dateString] > price) {
      datesPrices[dateString] = price
    }
  })

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

        <PricesChart prices={datesPrices} />
      </Stack>
    </Stack>
  )
}
