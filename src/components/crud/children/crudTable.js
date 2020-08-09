import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styles from '../styles.js';

const CrudTable = ({title, data, ...props}) => {
  const keys = Object.keys(data[0]);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {keys.map((column) => (
              <TableCell style={styles.tableCell}> {column} </TableCell>
            ))}
            <TableCell style={styles.actionTitle}> Accion </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow align="center" key={item.id}>
                {
                  Object.entries(item).map((key) => {
                    return (<TableCell>{ key[1] }</TableCell>)
                  })
                }
                <TableCell>
                  <Fab
                    style={styles.actionButton}
                    size="small"
                    color="primary"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </Fab>
                  <Fab style={styles.actionButton} size="small" color="secondary" aria-label="remove">
                    <DeleteOutlineIcon/>
                  </Fab>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CrudTable;
