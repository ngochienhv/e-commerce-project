import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Container,
  Grid,
  Image,
} from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  form: {
    minHeight: '100vh',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const Authentication = () => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Grid>
      <Grid.Col span={6}>
        <Paper className={classes.form} radius={0} p={30} pt={150}>
          <Container size="xs">
            <Title order={2} className={classes.title} ta="center" mt="md" mb={10}>
              Sign in
            </Title>
            <Text color="dimmed" size="lg" align="center" mb={50}>
              Please enter your details below
            </Text>
            <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
            <Checkbox label="Remember me" mt="xl" size="md" />
            <Button fullWidth mt="xl" size="md" color="green" onClick={() => router.push('/')}>
              Login
            </Button>

            <Text ta="center" mt="md">
              Don&apos;t have an account?{' '}
              <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
                Sign up for free
              </Anchor>
            </Text>
          </Container>
        </Paper>
      </Grid.Col>
      <Grid.Col span={6}>
        <Image
          src="https://www.figma.com/file/kCuUX6w9XzNlkh5SXbhzt6/image/1cd2ab538627525cc8630dc6b6c18d765657fc81?fuid=1030106477255539578"
          height="100vh"
        />
      </Grid.Col>
    </Grid>
  );
};

export default Authentication;
