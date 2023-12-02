import { type ReactNode } from 'react'
import { NavigationPage } from '../../common/enums/navigation'
import { redirect } from 'next/navigation'

export default function Home (): ReactNode {
  redirect(`/${NavigationPage.Stores}`)
}
