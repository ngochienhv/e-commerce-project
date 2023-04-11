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
        <Image
          src="https://www.figma.com/file/kCuUX6w9XzNlkh5SXbhzt6/image/384b6193f1ca61420fd1a11ba7fa3974246f0a2a?fuid=1030106477255539578"
          height="100vh"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Paper className={classes.form} radius={0} p={30} pt={100}>
          <Container size="xs">
            <Text color="dimmed" size="lg" align="center" mb={50}>
              Getting started is easy
            </Text>
            <Title order={2} className={classes.title} ta="center" mt="md" mb={10}>
              Sign up
            </Title>
            <TextInput label="Full Name" placeholder="John Doe" size="md" />
            <TextInput label="Email address" placeholder="hello@gmail.com" size="md" mt="md" />
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
            <PasswordInput label="Confirm Password" placeholder="Your password" mt="md" size="md" />
            <Button
              fullWidth
              mt="xl"
              size="md"
              color="green"
              mb={50}
              onClick={() => router.push('/')}
            >
              Create Account
            </Button>

            <Text color="dimmed" size="sm" align="center">
              By continuing you indicate that you read and agreed to the Terms of Use
            </Text>
          </Container>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default Authentication;
