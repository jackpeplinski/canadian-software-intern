import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data";

const Table = () => {
  return (
    <StyledTable>
      <Thead>
        <tr>
          <Th>Company</Th>
          <Th>Status</Th>
          <Th>Past Opening</Th>
          <Th>Location</Th>
        </tr>
      </Thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr>
              <Td>{data.company}</Td>
              <Td>
                {data.status === "Open" ? (
                  <HighlightGreen>{data.status}</HighlightGreen>
                ) : (
                  <HighlightRed>{data.status}</HighlightRed>
                )}
              </Td>
              <Td>{data.pastOpening}</Td>
              <Td>{data.location}</Td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
   {
    margin: auto;
    font-size: ${(props) => props.theme.fontSize.medium};
    border-collapse: collapse;
  }
`;

const HighlightGreen = styled.div`
   {
    background: ${(props) => props.theme.colors.green};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 5px;
  }
`;

const HighlightRed = styled.div`
   {
    background: ${(props) => props.theme.colors.red};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 5px;
  }
`;

const Td = styled.td`
   {
    padding: 2vh 5vw 0 0;
    &:last-child {
      padding: 2vh 0 0 0;
    }
  }
`;

const Th = styled.th`
   {
    padding: 2vh 5vw 2vh 0;
    &:last-child {
      padding: 2vh 0 2vh 0;
    }
  }
`;

const Thead = styled.thead`
   {
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteFaded};
  }
`;
