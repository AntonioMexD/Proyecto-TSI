import React from "react"
import { TableCell, TableBody } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

const InfoUser = (props) => (

    <TableBody>
        <TableRow key={props.id}>
            <TableCell component="th" scope="row">{props.user.id}</TableCell>
            <TableCell>{props.user.nombreCompleto}</TableCell>
            <TableCell>{props.user.numeroTelefono}</TableCell>
            <TableCell>{props.user.email}</TableCell>
            <TableCell>{props.user.departamento}</TableCell>
            <TableCell>{props.user.ciudad}</TableCell>
            <TableCell>{props.user.pais}</TableCell>
        </TableRow>
    </TableBody>
)

export default InfoUser
