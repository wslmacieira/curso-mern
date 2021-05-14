import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Grid, Paper, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer';

import { useStyles } from '../../../styles/global.styles'
import { api } from '../../../services/api';

export default function Dashboard() {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  const { usuarioId } = useParams();

  useEffect(() => {
    async function getUsuario(){
      const response = await api.get(`/api/usuarios/${usuarioId}`);
      const { nome_usuario, email_usuario, senha_usuario, tipo_usuario} = response.data;
      console.log(response.data)
      setNome(nome_usuario);
      setEmail(email_usuario);
      setSenha(senha_usuario);
      setTipo(tipo_usuario);
    }
    getUsuario();
  }, []);

  async function handleSubmit() {
    const data = {
      _id: usuarioId,
      nome_usuario: nome,
      email_usuario: email,
      senha_usuario: senha,
      tipo_usuario: tipo
    }
    console.log('data ->', data)
    const response = await api.put('/api/usuarios', data)

    if(response.status === 200) {
      window.location.href='/admin/usuarios';
    } else {
      alert('Erro ao atualizar usúario');
    }
  }

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'Usuarios'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Atualização de Usúario</h2>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      type="password"
                      required
                      id="senha"
                      name="senha"
                      label="Senha"
                      fullWidth
                      autoComplete="senha"
                      value={senha}
                      onChange={e => setSenha(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="labelTipo">Tipo</InputLabel>
                      <Select
                        labelId="labelTipo"
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                      >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Funcionario</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Salvar
                    </Button>
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