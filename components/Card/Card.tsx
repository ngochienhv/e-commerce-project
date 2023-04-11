import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconShoppingCart,
  IconUsers,
} from '@tabler/icons-react';

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

const ProductCard = () => {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src="https://www.figma.com/file/kCuUX6w9XzNlkh5SXbhzt6/image/195e5daffaf0400705c7099a665d13ce28672a6e?fuid=1030106477255539578"
          alt="blackberry"
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500} size="md">
            Black Berry
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
              $168.00
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per kilogram
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }} leftIcon={<IconShoppingCart />} color="green">
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
