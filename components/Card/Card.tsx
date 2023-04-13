import CartContext from '@/context/CartContext';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconShoppingCart,
  IconUsers,
} from '@tabler/icons-react';
import { useContext, useEffect } from 'react';
import { notifications } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export interface ProductProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard = (props: ProductProps) => {
  const { id, name, price, image } = props;
  const { classes } = useStyles();
  const [products, setProducts] = useContext(CartContext);
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  const onClickAddToCart = () => {
    notifications.show({
      title: 'Success',
      message: 'Your product has been added to the cart!',
      color: 'green',
    });
    setProducts((o) => [...o, props]);
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt="blackberry" height={300} fit="contain" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500} size="md">
            {name}
          </Text>
          <Text fz="xs" c="dimmed" mt={5}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              ${price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per kilogram
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            leftIcon={<IconShoppingCart />}
            color="green"
            onClick={onClickAddToCart}
          >
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
