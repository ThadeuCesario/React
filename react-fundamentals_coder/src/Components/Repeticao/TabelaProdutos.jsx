import React from 'react';

/* Import External Content */
import produtos from "../../data/produtos";

export default props => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, index) => {
                    return(
                        <tr key={produto.id} className={(index % 2) === 0 ? 'par' : ''}>
                            <td>{produto.id}</td>
                            <td>{produto.name}</td>
                            <td>{produto.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}