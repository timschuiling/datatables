import React from "react";
import ReactDOM from "react-dom";
import "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { jsondata } from "./data";
import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme();
theme = responsiveFontSizes(theme);
let data = [];
let list = Array.from(jsondata());
class Example extends React.Component {
  render() {
    const columns = [
      {
        name: "Asset",
        options: {
          width: "40px",
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "10px",
              background: "white",
              zIndex: 101
            }
          }),
          setCellHeaderProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "10px",
              background: "white",
              zIndex: 102
            }
          })
        }
      },
      {
        name: "Free",
        options: {
          width: "40px",
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 103
            }
          }),
          setCellHeaderProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 104
            }
          })
        }
      },
      {
        name: "Locked",
        options: {
          width: "40px",
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 105
            }
          }),
          setCellHeaderProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 106
            }
          })
        }
      },
      {
        name: "In_Usdt",
        options: {
          width: "40px",
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 107
            }
          }),
          setCellHeaderProps: () => ({
            style: {
              width: "40px",
              whiteSpace: "wrap",
              position: "sticky",
              left: "80px",
              background: "white",
              zIndex: 108
            }
          })
        }
      }
    ];

    Object.keys(list[0]).map((head, idx) => {
      if (idx > 3)
        columns.push({
          name: head,
          options: {
            width: "40px",
            filter: true,
            sort: false,
            setCellProps: () => ({
              style: {
                width: "40px",
                whiteSpace: "wrap",
                position: "sticky",
                left: "80px",
                background: "white",
                zIndex: 98
              }
            }),
            setCellHeaderProps: () => ({
              style: {
                width: "40px",
                whiteSpace: "wrap",
                position: "sticky",
                left: "80px",
                background: "white",
                zIndex: 99
              }
            })
          }
        });
      return idx;
    });

    ///Object.keys(list).map((e,a) => (test.push(a)))
    Object.keys(list).map((e, a) =>
      data.push(Object.values(list[e]).map((v, b) => v))
    );

    const options = {
      filter: true,
      pagination: false,
      filterType: "dropdown",
      responsive: "standard",
      fixedHeader: true,
      fixedSelectColumn: false,
      tableBodyHeight: "480px",
      tableBodyWidth: "320px"
    };

    return (
      <ThemeProvider theme={theme}>
        <MUIDataTable
          title={"spoTBot"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
