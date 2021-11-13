import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";
import {
  listAdminParticipants,
  deleteParticipant,
} from "../../../actions/admin";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Skeleton } from "antd";
import sampleUrl from "../../../assets/images/general/user-avatar.png";
import AdminAction from "../admin_action";
import TwitterIcon from "../../../assets/images/general/twitter_icon.svg";
import YoutubeIcon from "../../../assets/images/general/youtube_icon.svg";
import InstagramIcon from "../../../assets/images/general/instram_icon.svg";

class Participants extends Component {
  state = {
    loading: false,
    userid: "",
  };

  componentDidMount = async () => {
    const { listAdminParticipants } = this.props;
    this.setState({ loading: true });
    await listAdminParticipants();
    this.setState({ loading: false });
  };

  deleteParticipant(userid) {
    this.props.deleteParticipant(userid);
  }

  render() {
    const { admin } = this.props;
    const participants = admin.participants || [];
    const { loading } = this.state;
    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;
    const paginationOptions = {
      paginationSize: 10,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "20",
          value: 20,
        },
        {
          text: "100",
          value: 100,
        },
      ],
    };

    const photoFormatter = (cell, row) => {
      return <img className="table-photo" src={cell || sampleUrl} alt="" />;
    };

    const adminFormatter = (cell, row) => {
      return <AdminAction onDelete={() => this.deleteParticipant(row._id)} />;
    };

    const socialFormatter = (cell, row) => {
      return (
        <div className="flex">
          {row.youtube && (
            <a href={row.youtube} target="_blank" rel="noopener noreferrer">
              <img className="mr-2" src={YoutubeIcon} alt="" />
            </a>
          )}
          {row.twitter && (
            <a href={row.twitter} target="_blank" rel="noopener noreferrer">
              <img className="mr-2" src={TwitterIcon} alt="" />
            </a>
          )}
          {row.instagram && (
            <a href={row.instagram} target="_blank" rel="noopener noreferrer">
              <img className="mr-2" src={InstagramIcon} alt="" />
            </a>
          )}
        </div>
      );
    };

    const columns = [
      {
        dataField: "photo",
        text: "Photo",
        formatter: photoFormatter,
      },
      {
        dataField: "full_name",
        text: "Full Name",
      },
      {
        dataField: "username",
        text: "Username",
      },
      {
        dataField: "email",
        text: "Email",
      },
      {
        dataField: "role",
        text: "Site Role",
      },
      {
        dataField: "location",
        text: "Location",
      },
      {
        dataField: "twitter",
        text: "Social",
        formatter: socialFormatter,
      },
      {
        dataField: "films",
        text: "Films that Define user",
      },
      {
        dataField: "",
        text: "Action",
        formatter: adminFormatter,
      },
    ];

    return (
      <div className="content-admin">
        <Row>
          <Col className="flex">
            <h5 className="mr-auto">All Users</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Skeleton active loading={loading} />
            <Card>
              <CardBody>
                <ToolkitProvider
                  bootstrap4
                  keyField="id"
                  data={participants}
                  columns={columns}
                  search
                  exportCSV={{
                    onlyExportFiltered: true,
                    exportAll: false,
                    fileName: "all-user.csv",
                  }}
                >
                  {(props) => (
                    <React.Fragment>
                      <Row>
                        <Col className="flex">
                          <SearchBar {...props.searchProps} />
                        </Col>
                        <Col className="text-right">
                          <ExportCSVButton
                            {...props.csvProps}
                            className="btn btn-primary"
                          >
                            Export CSV
                          </ExportCSVButton>
                        </Col>
                      </Row>
                      <BootstrapTable
                        {...props.baseProps}
                        bordered={false}
                        wrapperClasses={`table-responsive data-table-1 mb-1`}
                        pagination={paginationFactory(paginationOptions)}
                      />
                    </React.Fragment>
                  )}
                </ToolkitProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin,
  };
}

export default connect(mapStateToProps, {
  listAdminParticipants,
  deleteParticipant,
})(Participants);
