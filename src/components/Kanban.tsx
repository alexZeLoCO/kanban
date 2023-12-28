import { Column } from "./Column";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import { TaskProps } from "./Task";

export const Kanban = () => {
    const tasks: {[key: string]: TaskProps[]} = {
        "Backlog": [],
        "Ongoing": [],
        "Standby": [],
        "Done": []
    };
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        {
                            Object.keys(tasks).map((columnName: string) => <TableCell><Column columnName={columnName} /></TableCell>)
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};