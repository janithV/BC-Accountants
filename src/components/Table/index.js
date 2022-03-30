import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

function taxTable({content,type,keys}) {
  const cols = ['col1','col2','col3','col4'];
  const payrollWidth = [180,150,150,400];

  return (
    <div> 
       <Table
          style={{marginBottom:20}}
          autoHeight
          data={content}
          onRowClick={data => {
            console.log(data);
          }}
        >
          {keys.map((key, index) => (
              <>
              <Column width={payrollWidth[index]} colSpan={2}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={cols[index]} rowIndex={index} key={index}/>
            </Column>
           </>
            ))              
            }
        </Table>
      
      {/* <Table bordered responsive>
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
    </Table> */}
  </div>
  )
}

export default taxTable