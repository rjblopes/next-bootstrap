import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSession } from 'next-auth/client';
import Copyright from '@components/Copyright';
import ProTip from '@components/ProTip';
import Link from '@components/Link';

export default function Index() {
  const [session] = useSession();
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <div>{JSON.stringify(session || {})}</div>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
