import {
  createStyles,
  Paper,
  Container,
  Title,
  Button,
  Text,
  rem,
  Image,
  Center,
  Group,
} from '@mantine/core';
import heroHeader from '@/public/assets/hero.png';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  container: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
    zIndex: 1,
    position: 'relative',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    fontSize: rem(40),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl})`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  inner: {
    width: '100%',
  },
}));

const HeroHeader = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Paper className={classes.container}>
      <Container className={classes.inner} size="xl">
        <Center>
          <Container size={280} m={0}>
            <Title className={classes.title}>The best place to get fresh food</Title>
            <Text className={classes.description} size="md" mt="xl">
              We promise you the best organic food from our entrusted partners
            </Text>

            <Group>
              <Button
                variant="filled"
                size="md"
                radius="xl"
                className={classes.control}
                color="green"
                p={12}
                onClick={() => router.push('/store')}
              >
                Browse Store
              </Button>
              <Button
                variant="outline"
                size="md"
                radius="xl"
                className={classes.control}
                color="green"
                p={12}
              >
                About Us
              </Button>
            </Group>
          </Container>
          <Image src={heroHeader.src} width={850} />
        </Center>
      </Container>
    </Paper>
  );
};

export default HeroHeader;
