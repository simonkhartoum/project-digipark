function TableRow({id,name,county,region_id,lot_num,ondelete,updating}){
    function DeleteRow(){
        ondelete(id)
    }
    function Update(){
        const newPrice = prompt('Enter the new number of lots:');
        if (newPrice !== null && newPrice !== '') {
          updating(id, Number(newPrice));
        }
    }
    return(
        <>
         <tr key={id}>
              <td style={{width:"5%"}}>{id}</td>
              <td>{name}</td>
              <td>{county}</td>
              <td>{region_id}</td>
              <td>{lot_num}</td>
              <td>
                <button style={{backgroundColor:"rgb(13, 226, 155)"}} onClick={Update}>
                  Update
                </button>
              </td>
              <td>
                <button style={{backgroundColor:"red"}} onClick={DeleteRow}>
                  Delete
                </button>
              </td>
            </tr>
        </>
    )
}
export default TableRow;
