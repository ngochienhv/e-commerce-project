import { ProductProps } from '@/components/Card/Card';
import FooterCentered from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import CartContext from '@/context/CartContext';
import { AppShell, Container, Group, Image, Paper, Space, Stack, Text, Title } from '@mantine/core';
import { ReactElement, useContext } from 'react';

const Cart = () => {
  const [products] = useContext(CartContext);

  const renderCartItem = (item: ProductProps) => {
    return (
      <Paper p="xl" radius="lg" shadow="lg">
        <Group position="apart">
          <Image src={item.image} height={100} width={100} />
          <Text size="lg" weight="bold">
            {item.name}
          </Text>
          <Text size="lg" weight="bold">
            ${item.price}/kg
          </Text>
        </Group>
      </Paper>
    );
  };

  return (
    <Container size="md" mt={50}>
      <Title order={2}>Cart</Title>
      <Space h="sm" />
      <Paper p="xl" radius="lg" shadow="lg">
        <Group position="apart">
          <Text size="lg" weight="bold">
            Image
          </Text>
          <Text size="lg" weight="bold">
            Name
          </Text>
          <Text size="lg" weight="bold">
            Price
          </Text>
        </Group>
      </Paper>
      <Space h="sm" />
      <Stack>{products.map((product) => renderCartItem(product))}</Stack>
    </Container>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
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

export default Cart;
