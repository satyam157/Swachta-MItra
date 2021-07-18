import React, {Component} from "react";
import _ from 'lodash';
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

class Tables extends Component {
  render() {
    const { columns, data } = this.props;
    // spread two-dimensional array to arguments for zip
    // destructure resulting array elements from zip
    let [names, props] = _.zip(...columns);
    // build column headers with name values
    let headers = <tr>{names.map((name, n) => <th scope="col" key={n}>{name}</th>)}</tr>
    // build rows with corresponding properties from the data for each column
    let rows = data.map((item, i) => <tr className="mb-0 text-sm" key={i}>{props.map((prop, p) => <td key={p}>{item[prop]}</td>)}</tr>);

    return (
      <>
        <Table className="align-items-center table-dark" responsive>
          <thead className="thead-dark">
           {headers}
          </thead>
          <tbody>{rows}</tbody>
          </Table>
      </>
    );
  }
}

export default Tables;
