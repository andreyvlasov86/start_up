import React, {Component} from 'react';
import DataTableView from '../../components/Common/DataTable';


class usersList extends Component {

    render() {

      const config = {
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
    };

    const header =
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

        return (
            <DataTableView
                config={config}
                header={header}
            />
        )
    }
}

export default usersList;
