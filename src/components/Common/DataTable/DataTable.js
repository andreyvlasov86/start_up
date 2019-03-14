import React, {Component} from 'react';
import $ from 'jquery';

import 'datatables.net'
import 'datatables.net-bs4/js/dataTables.bootstrap4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import 'datatables.net-bs4';

import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.css';

import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/dataTables.buttons.js';

import 'datatables.net-fixedheader';
import 'datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4';
import 'datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.css';

import 'datatables.net-responsive';
import 'datatables.net-responsive-bs4/js/responsive.bootstrap4';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.css';

import 'datatables.net-rowgroup';
import 'datatables.net-rowgroup-bs4/js/rowGroup.bootstrap4';
import 'datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.css';

import 'datatables.net-select'
import 'datatables.net-select-bs4/js/select.bootstrap4';
import 'datatables.net-select-bs4/css/select.bootstrap4.css';

import './DataTable.css'

//import 'datatables.net-dt';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {refreshToken} from "../../../store/auth/actions";



class DataTableView extends Component {

    constructor(props) {
        super(props);
        this.dt_header = this.props.dt_headers ? this.props.dt_headers :
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
            </tr>
        ;
        this.base_config = {
            ajax: {
                url: `${this.props.url}?format=datatables`,  //required param
                beforeSend: function (request) {
                    request.setRequestHeader(
                        'authorization', 'Bearer ' + localStorage.getItem('access_token')
                    );
                },
                error: function (request) {
                    if (request.status === 401) {
                        props.refreshToken();
                    }
                },
            }
        };
        this.default_config = {
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
                    {
                        text: 'Reload',
                        action: function ( e, dt, node, config ) {
                            dt.ajax.reload();
                        },
                        className: 'btn btn-primary btn-sm',
                        init: function (api, node, config) {
                            $(node).removeClass('btn-secondary')
                        }
                    },
                ],
            }
        };
        console.log('default config', this.default_config);

        this.config = {
            ...this.default_config,
            ...this.props.dt_config
        };

        console.log('config', this.config);
        this.dt_config = {
            ...this.config,
            ...this.base_config
        };
        console.log('dt_config', this.dt_config);
    };

    componentDidMount() {

        // Init dataTable
        const table = $('#DataTable').DataTable(this.dt_config);


        // SingleColumnSearch if true in config
        if (this.props.func_config && this.props.func_config.SingleColumnSearch) {

            $('#DataTable thead tr').clone(true).appendTo( '#DataTable thead' );

            $('#DataTable thead tr:eq(1) th').each( function (i) {
            const title = $(this).text();
            if (title) {
                $(this).html('<input type="text" placeholder="Search ' + title + '" />');

                $('input', this).on('keyup change', function () {
                    if (table.column(i).search() !== this.value) {
                        table
                            .column(i)
                            .search(this.value)
                            .draw();
                    }
                });
            }
        } );
        }


        // Logic for buttons in rows
        $('#DataTable tbody').on( 'click', 'button', function () {
            var data = table.row( $(this).parents('tr') ).data();
            alert(data.id);
        } );
    }

    shouldComponentUpdate(nextProps) {

        if(nextProps.data.token.access_token !== this.props.data.token.access_token) {
            $('#DataTable').DataTable().ajax.reload(null, false);
        }
        return false
    }

    render() {
        return (
            <div>
                <table id='DataTable' className='table table-striped table-bordered'>
                  <thead>
                    {this.dt_header}
                  </thead>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        {data: state.auth }
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    refreshToken
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataTableView);
