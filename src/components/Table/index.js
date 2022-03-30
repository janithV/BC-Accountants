import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

function taxTable({content,type,keys}) {
  const colsType1 = ['col1','col2','col3','col4'];
  const colsType2 = ['col1','col2','col3','col4','col5','col6','col7'];
  const type1Width = [180,150,150,400];
  const type2Width =[250,100,100,100,100,100,100]

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
          {type ==='type1' && keys.map((key, index) => (
              <>
              <Column width={type1Width[index]} colSpan={2}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={colsType1[index]} rowIndex={index} key={index}/>
            </Column>
           </>
            ))              
            }
            {type ==='type2' && keys.map((key, index) => (
              <>
              <Column width={type2Width[index]} colSpan={6}>
              <HeaderCell>{key}</HeaderCell>
              <Cell dataKey={colsType2[index]} rowIndex={index} key={index}/>
            </Column>
           </>
            ))              }
        </Table>
      
  </div>
  )
}

export default taxTable