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
import 'datatables.net-select-bs4/css/select.bootstrap4.css'

//import 'datatables.net-dt';



class DataTableView extends Component {

    componentDidMount() {

        /*$('#DataTable thead tr').clone(true).appendTo( '#DataTable thead' );

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
        } );*/

        const table = $('#DataTable').DataTable({
          serverSide: true,
          paging: true,
          search: true,
          stateSave: true,
          orderCellsTop: true,
          fixedHeader: true,
          ajax: '/api/v1/users/?format=datatables',

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
                defaultContent: '<button>Edit</button>'
              },
              {
                targets: -2,
                orderable: false,
                searchable: false,
                data: null,
                defaultContent: '<button>Activate</button>'
              },
              {
                targets: -1,
                orderable: false,
                searchable: false,
                data: null,
                defaultContent: '<button>Delete</button>'
              }
          ],

          select: {
                style:    'multi',
                selector: 'td:first-child'
          },

          dom: 'Blfrtip',
          buttons: [
                'selected',
                'selectedSingle',
                'selectAll',
                'selectNone',
                'selectRows',
                'selectColumns',
                'selectCells',
                'copy',
                'csv',
                'print',
                {
                    text: 'Reload',
                    action: function ( e, dt, node, config ) {
                        dt.ajax.reload();
                    }
                },
          ],

        });

    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <table id='DataTable' className='table table-striped table-bordered'>
                  <thead>
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
                  </thead>
                </table>
            </div>
        )
    }
}

export default DataTableView;
