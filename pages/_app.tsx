import { ProductProps } from '@/components/Card/Card';
import CartContext from '@/context/CartContext';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const [products, setProducts] = useState<ProductProps[]>([]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CartContext.Provider value={[products, setProducts]}>
        <Notifications />
        {getLayout(<Component {...pageProps} />)}
      </CartContext.Provider>
    </MantineProvider>
  );
}
