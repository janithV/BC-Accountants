import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

function taxTable({content,type,keys}) {
  const payroll = ['basType','usualDate','extendedDate','appliesTo'];
  const payrollWidth = [200,130,150,400];

  const taxDue = ['clientType','lodgingDue','paymentDue','appliesTo'];
  const taxDueWidth = [200,130,150,400];

  const BAS = ['basType','usualDate','extendedDate','appliesTo'];
  const BASWidth = [200,130,150,400];

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
          {type==='taxDue' && keys.map((key, index) => (
              <>
              <Column width={taxDueWidth[index]} colSpan={2}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={taxDue[index]} rowIndex={index} key={index}/>
            </Column>
           </>
            ))              
            }

          {type==='BAS' && keys.map((key, index) => (
              <>
              <Column width={BASWidth[index]} colSpan={2}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={BAS[index]} key={index}/>
            </Column>
           </>
            ))   
            }

            {type==='PayRoll' && keys.map((key, index) => (
              <>
              <Column width={payrollWidth[index]} colSpan={2}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={payroll[index]} key={index}/>
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