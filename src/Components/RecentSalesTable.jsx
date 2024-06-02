import React from "react";


function RecentSalesTable ({items}) {
    const handleStatus = status => {
        switch (status) {
            case 'Approved':
                return 'success';
                break;
            case 'Pendente':
                return 'warning';
                break;
            case 'Rejected':
                return 'danger';
                break;
            default:
                return 'Success';

        }
    };


    return (
        <table className="table table-borderless datatable">
        <thead className="table-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Cliente</th>
                <th scope="col">Produto</th>
                <th scope="col">Preço</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
                {items &&
                items.length > 0 &&
                items.map(item => (
                    <tr key={item._id}>
                        <th scope="row">
                            <a href="#">{item.number}</a>
                        </th>
                        <td>{item.customer}</td>
                        <td>
                            <a href="#" className="text-primary">
                                {item.product}
                            </a>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                            <span className={`badge bg-${handleStatus(item.status)}`}>
                                {item.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RecentSalesTable;