import React, { useEffect, useState } from 'react';
import {Container, Paper, Grid, Box, Button, ButtonGroup, } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from '../../../styles/global.styles'
import { api } from '../../../services/api';

export default function Dashboard() {
  const classes = useStyles();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get('/api/usuarios');
      setUsuarios(response.data);
    }
    loadUsuarios();
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin title={'Usuarios'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                  <h2>Listagem de Usúario</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Data de Cadastro</TableCell>
            <TableCell align="left">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario) => (
            <TableRow key={usuario._id}>
              <TableCell component="th" scope="usuario">
                {usuario.nome_usuario}
              </TableCell>
              <TableCell align="left">{usuario.email_usuario}</TableCell>
              <TableCell align="left">{usuario.tipo_usuario === 1 
              ? <Chip
              label="Administrador"
              clickable
              color="primary"
            />
              : <Chip
              label="Funcionario"
              clickable
              color="secondary"
            />
              }</TableCell>
              <TableCell align="left">{new Intl.DateTimeFormat('pt-BR').format(
                  new Date(usuario.createdAt)
                )}</TableCell>
              <TableCell align="left">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                  <Button color="primary">Atualizar</Button>
                  <Button color="secondary">Excluir</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}