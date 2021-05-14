import Link from '@material-ui/core/Link'; 

import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Curso Básico Mer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}