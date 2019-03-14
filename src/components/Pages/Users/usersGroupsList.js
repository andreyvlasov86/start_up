import React, {Component} from 'react';
import DataTableView from '../../Common/DataTable/DataTable';

class usersGroupsList extends Component {

    // url variable is required (need to add only api url without '?format=datatables' param)
    // dt_headers is required

    render() {
        const dt_headers =
            <tr>
              <th></th>
              <th data-data='id'>ID</th>
              <th data-data='email'>Email</th>
              <th data-data='date_joined'>Date Joined</th>
              <th data-data='last_login'>Last login</th>
              <th data-data='is_active'>Is active</th>
            </tr>;

        const dt_config = {
            columnDefs: [
                {
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    defaultContent: '',
                    className: 'select-checkbox'
                },
            ],
        };

        const func_config = {
            SingleColumnSearch: false,
        };

        return (
            <DataTableView
                url='http://178.128.204.78/api/v1/users_groups/'
                dt_headers={dt_headers}
                dt_config={dt_config}
                func_config={func_config}
            />
        )
    }
}


export default usersGroupsList;
