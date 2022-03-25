import React from 'react'
import Table from 'react-bootstrap/Table'

function taxTable({content,type,keys}) {
    
  return (
    <div> <Table bordered responsive>
    <thead>
      <tr>
          {keys.map((obj)=>(
               <th>{obj}</th>
          ))}
      </tr>
    </thead>
    <tbody>
        {type==='taxDue' && content.map((obj)=>(
            <tr>
            <td>{obj.clientType}</td>
            <td>{obj.lodgingDue}</td>
            <td>{obj.paymentDue}</td>
            <td>{obj.appliesTo}</td>
          </tr>
        ))}
        {type==='BAS' &&content.map((obj)=>(
            <tr>
            <td>{obj.basType}</td>
            <td>{obj.usualDate}</td>
            <td>{obj.extendedDate}</td>
            <td>{obj.appliesTo}</td>
          </tr>
        ))}
    </tbody>
  </Table></div>
  )
}

export default taxTable