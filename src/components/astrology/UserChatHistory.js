import React from "react";
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class UserChatHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserChatHistory: [],
      data: {},
    };

    this.state = {
      TablerowData: [],
      columns: [
        // {
        //   headerName: "ID",
        //   field: "transaction_id",
        //   sortable: true,
        //   filter: true,
        // },
        {
          headerName: "Astrologer Name",
          field: "astroId.fullname",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Conversation Type",
          field: "type",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Rate",
          field: "totalCredited",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Amount",
          field: "userAmt",
          sortable: true,
          filter: "agNumberColumnFilter",
        },

        {
          headerName: "Deduction",
          field: "totalDuration",
          sortable: true,
          filter: "agNumberColumnFilter",
        },

        {
          headerName: "Duration",
          field: "duration",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Date",
          valueGetter: function (params) {
            return params.data.createdAt.split("T")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Time",
          valueGetter: function (params) {
            return params.data.createdAt.split("T")[1].split(".")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
      ],
    };
  }
  componentDidMount = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/userChathistory/${userId}`)
      .then(response => {
        // console.log(response.data.data);
        const AllChatData = response.data.data.filter(
          ele => ele.type === "Chat"
        );
        console.log(AllChatData);
        this.setState({
          UserChatHistory: AllChatData,
        });
      })
      .catch(error => {
        console.log(error);
      });
    axiosConfig
      .get(`/user/userChathistory/${userId}`)
      .then(response => {
        this.setState({
          amount: response.data.data.amount,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { UserChatHistory } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>UserChatHistory Transactions</h1>

                    <h3>
                      Available balance : <span>{this.state.amount}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div
            className="ag-theme-balham"
            style={{
              height: "80vh",
              width: "100%",
            }}
          >
            <AgGridReact
              columnDefs={this.state?.columns}
              rowData={UserChatHistory}
              pagination={true}
              paginationPageSize={50}
            />
          </div>
        </section>
      </LayoutOne>
    );
  }
}
export default UserChatHistory;

// import React from "react";

// import { Container, Row, Col, Table } from "reactstrap";
// import astrologinbg from "../../assets/img/astrologin-bg.jpg";

// import LayoutOne from "../../layouts/LayoutOne";
// import "../../assets/scss/astroteam.scss";

// import axiosConfig from "../../axiosConfig";

// class UserCallHistory extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userChatList: [],
//     };
//   }
//   componentDidMount() {
//     let userId = JSON.parse(localStorage.getItem("user_id"));
//     axiosConfig
//       .get(`/user/userChathistory/${userId}`)
//       .then(response => {
//         const responseData = response?.data?.data;
//         console.log(responseData);

//         responseData.filter(ele => ele.type === "Chat");

//         // if (responseData === true) {
//         // console.log(allChat);
//         this.setState({
//           userChatList: responseData,
//         });
//         // }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const { userChatList } = this.state;

//     return (
//       <LayoutOne headerTop="visible">
//         <section className="pt-0 pb-0">
//           <div
//             className=""
//             style={{
//               float: "left",
//               width: "100%",
//               backgroundColor: "#272727",
//               position: "relative",
//               backgroundAttachment: "fixed",
//               backgroundSize: "cover",
//               color: "#ffffff",
//               padding: " 50px 0px 50px 0px",
//               backgroundImage: `url(${astrologinbg})`,
//               backgroundPosition: "center center",
//               backgroundRepeat: " no-repeat",
//               textAlign: "center",
//             }}
//           >
//             <Container>
//               <Row>
//                 <Col md="12">
//                   <div className="leftcont text-left">
//                     <h1>UserChatHistory Transactions</h1>
//                   </div>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </section>

//         <section>
//           <Container>
//             <Row>
//               <Col lg="12">
//                 <div className="">
//                   <Table striped className="">
//                     <thead>
//                       <tr>
//                         <th>#Conversation ID</th>
//                         <th>Astrologer Name</th>

//                         <th>Conversation Type</th>
//                         <th>Rate</th>
//                         <th>Duration</th>

//                         <th>Deducation</th>
//                         {/* <th>Date/Time</th> */}
//                       </tr>
//                     </thead>
//                     {userChatList.length
//                       ? userChatList.map(user => {
//                           return (
//                             <tbody key={user._id}>
//                               <tr>
//                                 <th>{user?.Sid}</th>
//                                 <td>{user?.astroId?.fullname}</td>

//                                 <td>{user.type}</td>

//                                 <td>{user?.astroid?.callCharge}/Min.</td>

//                                 <td>{user?.Duration} Min</td>
//                                 <td>{user?.userdeductedAmt} Rs</td>
//                                 {/* <td>{user?.DateCreated.split("T")[0]}</td> */}
//                               </tr>
//                             </tbody>
//                           );
//                         })
//                       : null}
//                   </Table>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </LayoutOne>
//     );
//   }
// }

// export default UserCallHistory;
