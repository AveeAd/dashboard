import styled from "@emotion/styled";
import PaginationComp from "./PaginationComp";
import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";

const TableComponent = ({ tableData, total, page, setPage, actions }) => {
  return (
    <>
      <Table>
        <Thead>
          <tr>
            {Object.keys(tableData[0]).map((value, index) => (
              <td key={index}>{value.toUpperCase()}</td>
            ))}
            {actions ? <td>Actions</td> : undefined}
          </tr>
        </Thead>
        <Tbody>
          {tableData.map((data, index) => (
            <Tr key={index}>
              {Object.values(data).map((value, index) => (
                <Td key={index}>
                  {value === true ? "true" : value === false ? "false" : value}
                </Td>
              ))}
              {actions ? (
                <Td>
                  {actions.edit ? (
                    <RiEditBoxFill className="edit" />
                  ) : undefined}
                  {actions.delete ? (
                    <RiDeleteBinFill className="del" />
                  ) : undefined}
                </Td>
              ) : undefined}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <PaginationComp total={total} page={page} setPage={setPage} />
    </>
  );
};

export default TableComponent;

const Table = styled.table`
  text-align: center;
  width: 100%;
`;

const Thead = styled.thead`
  background: #d0bfff;
  color: #fff;
  font-weight: bold;
  td {
    padding: 1rem;
  }
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  background: #fff;
`;

const Td = styled.td`
  padding: 1rem;
`;
