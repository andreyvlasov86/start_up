import React, {Component} from 'react';
import DataTableView from '../../Common/DataTable/DataTable';
import $ from 'jquery';


class usersList extends Component {

    render() {

        const dt_config = {
            serverSide: true,
            paging: true,
            search: true,
            stateSave: true,
            orderCellsTop: true,
            fixedHeader: true,
            columnDefs: [
                {
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    defaultContent: '',
                    className: 'select-checkbox'
                },
                {
                    targets: -3,
                    orderable: false,
                    searchable: false,
                    data: null,
                    defaultContent: '<button class="btn btn-primary btn-sm" onclick="" >Edit</button>',
                },
                {
                    targets: -2,
                    orderable: false,
                    searchable: false,
                    data: null,
                    defaultContent: '<button class="btn btn-success btn-sm">Activate</button>'
                },
                {
                    targets: -1,
                    orderable: false,
                    searchable: false,
                    data: null,
                    defaultContent: '<button class="btn btn-danger btn-sm">Delete</button>'
                }
            ],
            select: {
                style: 'multi',
                selector: 'td:first-child'
            },
            dom: 'Blfrtip',
            buttons: {
                buttons: [
                    {
                        extend: 'selectAll',
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                    // 'selectAll',
                    // 'selectNone',
                    {
                        extend: 'selectNone',
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                    {
                        extend: 'copy',
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                    {
                        extend: 'csv',
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                    {
                        extend: 'print',
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                    // 'csv',
                    // { extend: 'csv', className: 'btn-primary' },
                    // 'print',
                    // {
                    //     text: 'Reload',
                    //     action: function ( e, dt, node, config ) {
                    //         dt.ajax.reload();
                    //     },
                    //   className: 'btn btn-primary',
                    // },
                ],
            }

        };

        const dt_headers =
            <tr>
                <th></th>
                <th data-data='id'>ID</th>
                <th data-data='email'>Email</th>
                <th data-data='first_name'>First Name</th>
                <th data-data='last_name'>Last_name</th>
                <th data-data='date_joined'>Date Joined</th>
                <th data-data='last_login'>Last login</th>
                <th data-data='is_active'>Is active</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>;

        const func_config = {
            SingleColumnSearch: true,
        };

        return (
            <DataTableView
                url='http://178.128.204.78/api/v1/users/'
                dt_config={dt_config}
                dt_headers={dt_headers}
                func_config={func_config}
            />
        )
    }
}

export default usersList;
