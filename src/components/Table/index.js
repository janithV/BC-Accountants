import React from 'react'
import Table from 'react-bootstrap/Table'

function taxTable({content}) {
  return (
    <div> <Table bordered responsive>
    <thead>
      <tr>
        <th>Client Type</th>
        <th>Lodging Due</th>
        <th>Payment Due</th>
        <th>Applies To</th>
      </tr>
    </thead>
    <tbody>
        {content.map((obj)=>(
            <tr>
            <td>{obj.clientType}</td>
            <td>{obj.lodgingDue}</td>
            <td>{obj.paymentDue}</td>
            <td>{obj.appliesTo}</td>
          </tr>
        ))}
    </tbody>
  </Table></div>
  )
}

export default taxTable