import {
  createStyles,
  Header as MantineHeader,
  Group,
  rem,
  Container,
  Avatar,
  Button,
} from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  link: string;
  label: string;
}

const links: HeaderSearchProps[] = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/',
    label: 'Store',
  },
  {
    link: '/',
    label: 'News',
  },
  {
    link: '/',
    label: 'About',
  },
];

const Header = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={60}>
      <Container className={classes.inner} size="lg">
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group style={{ position: 'absolute', right: 'calc(100rem - 86.5rem)' }}>
          <Button
            variant="filled"
            size="sm"
            radius="xl"
            color="green"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            radius="xl"
            color="green"
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
        </Group>
      </Container>
    </MantineHeader>
  );
};

export default Header;
