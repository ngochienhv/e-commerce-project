import {
  createStyles,
  Header as MantineHeader,
  Group,
  rem,
  Container,
  Avatar,
} from '@mantine/core';

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
        <Avatar radius="xl" style={{ position: 'absolute', right: 'calc(100rem - 86.5rem)' }} />
      </Container>
    </MantineHeader>
  );
};

export default Header;
