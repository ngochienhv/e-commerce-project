import Head from 'next/head';
import { ReactElement } from 'react';
import { AppShell, Title, Container, SimpleGrid, Center, Space, Divider } from '@mantine/core';
import Header from '@/components/Header/Header';
import FooterCentered from '@/components/Footer/Footer';
import ProductCard from '@/components/Card/Card';
import ogImage from '@/public/assets/hero.png';
import data from '../../data';

export default function Store() {
  return (
    <>
      <Head>
        <title>Clean Organic Food</title>
        <meta
          name="description"
          key="description"
          content="New fresh products daily from organic farms all over the country"
        />
        <meta property="og:title" key="og_title" content={`Clean Organic Food`} />
        <meta
          property="og:description"
          key="og_description"
          content="New fresh products daily from organic farms all over the country"
        />
        <meta property="og:image" key="og_image" content={ogImage.src} />
        <meta property="og:url" key="og_url" content={`${ogImage.src}`} />
      </Head>
      <Container size="lg">
        <Center mt={30}>
          <Title order={3}>Our Store</Title>
        </Center>
        <Divider my="xl" />
        <SimpleGrid cols={3}>
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </SimpleGrid>
        <Space h="md" />
      </Container>
    </>
  );
}

Store.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppShell
      padding="md"
      footer={<FooterCentered />}
      header={<Header />}
      styles={{
        main: {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
          paddingTop: '60px !important',
        },
      }}
    >
      {page}
    </AppShell>
  );
};
