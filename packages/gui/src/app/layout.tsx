import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import { ThemeRegistry } from '../../common/components/theme-registry'
import { Container } from '@mui/material'
import { NavigationMenu } from '../../common/components/navigation-menu'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Tracker',
  description: 'Tracker'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): ReactNode {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <div className={styles.layout}>
            <div className={styles.content}>
              <Container maxWidth="md">
                {children}
              </Container>
            </div>
            <div className={styles.menu}>
              <Container maxWidth="md">
                <NavigationMenu />
              </Container>
            </div>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  )
}
