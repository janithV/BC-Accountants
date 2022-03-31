import { style } from '@mui/system';
import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

function taxTable({content,keys,tableWidth}) {

  const colsType2 = ['col1','col2','col3','col4','col5','col6','col7'];

  console.log("Table width",tableWidth[0]);
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
                <Column width={tableWidth[index]} colSpan={6}>
                  <HeaderCell style={{fontWeight:'bold'}}>{key}</HeaderCell>
                  <Cell dataKey={colsType2[index]} rowIndex={index} key={index}/>
                </Column>
              </>
            ))              
            }
            
        </Table>
      
  </div>
  )
}

export default taxTable