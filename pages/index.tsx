import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import { AppShell, Title, Container, SimpleGrid, Center, Space } from '@mantine/core';
import Header from '@/components/Header/Header';
import FooterCentered from '@/components/Footer/Footer';
import HeroHeader from '@/components/HeroHeader/HeroHeader';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import ProductCard from '@/components/Card/Card';
import ogImage from '../public/assets/hero.png';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
      <HeroHeader />
      <FeatureSection />
      <Container size="lg">
        <Center>
          <Title order={3}>Featured Products</Title>
        </Center>
        <Space h="md" />
        <SimpleGrid cols={3}>
          {[1, 2, 3].map((v) => (
            <ProductCard key={v} />
          ))}
        </SimpleGrid>
        <Space h="md" />
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
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
