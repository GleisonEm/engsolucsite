import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({forms}) {

  // if(!forms) {
  //   forms = [
  //       createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  //       createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  //       createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  //       createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  //   ];
  // }
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Formulários Recentes</Title>
      <Table size="giant">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Função na empresa ? *</TableCell>
            <TableCell >Com quantas pessoas você mora ? *</TableCell>
            <TableCell >Qual meio de transporte você utiliza frequentemente ? *</TableCell>
            <TableCell >Teve contato com alguém com covid-19 ? *</TableCell>
            <TableCell >Nos últimos 8 dias, sentiu algum desses sintomas ? *</TableCell>
            <TableCell >Alguém que reside no mesmo ambiente que você teve alguns desse sintomas ? *</TableCell>
            <TableCell >Confirmo que todas as respostas acima são verdadeiras. *</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.created_at}</TableCell>
              <TableCell>{form.email}</TableCell>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.qone_response}</TableCell>
              <TableCell >{form.qtwo_response}</TableCell>
              <TableCell >{form.qthree_response}</TableCell>
              <TableCell >{form.qfour_response}</TableCell>
              <TableCell >{form.qfive_response}</TableCell>
              <TableCell >{form.qsix_response}</TableCell>
              <TableCell >{form.qseven_response}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}