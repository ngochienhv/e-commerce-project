import {
  createStyles,
  Title,
  Text,
  Stack,
  ThemeIcon,
  Grid,
  Col,
  rem,
  Group,
  Container,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ProductCard from '../Card/Card';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quos.',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quos.',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quos.',
  },
];

const FeatureSection = () => {
  const { classes } = useStyles();

  const items = features.map((feature, index) => (
    <Group key={index}>
      <ThemeIcon size={20} radius="xl" variant="filled" color="green">
        <IconCheck size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </Group>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <Grid gutter={80}>
        <Col span={6}>
          <Title className={classes.title} order={2}>
            New fresh products daily from organic farms all over the country
          </Title>
          <Stack>{items}</Stack>
        </Col>
        <Col span={1}></Col>
        <Col span={5}>
          <ProductCard />
        </Col>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
