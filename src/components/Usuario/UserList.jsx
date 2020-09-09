import React, { Component } from "react"
import InfoUser from "./InfoUser"
import axios from "axios"
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserList: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:51831/api/user`)
            .then(resp => {
                this.setState(
                    {
                        UserList: resp.data
                    }
                )
            })
    }

    render() {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table arial-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Nombre Completo</TableCell>
                                <TableCell align="right">Numero de telefono</TableCell>
                                <TableCell align="right">Correo</TableCell>
                                <TableCell align="right">Departamento</TableCell>
                                <TableCell align="right">Ciudad</TableCell>
                                <TableCell align="right">Pais</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            this.state.UserList.map(u => <InfoUser user={u} key={u.id} />)

                        }
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default UserList