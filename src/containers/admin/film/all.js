import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Checkbox, Tooltip } from "antd";
import { Row, Col, Card, CardBody } from "reactstrap";
import {
  processAdminVideos,
  deleteVideo,
  setFeaturedVideo,
  fetchJWVideos,
} from "../../../actions/jwplayer";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import AdminAction from "../admin_action";
import SinglePlayer from "../../../components/video/single-player";
import FeaturedIcon from "../../../assets/images/general/featured.png";
import { durationFormatter } from "../../../utils/helper";

class FilmsAll extends Component {
  state = {
    showVideoModal: false,
    curVideo: {},
  };

  openVideoModal = (curVideo) => {
    this.setState({
      showVideoModal: true,
      curVideo,
    });
  };

  hideVideoModal = () => {
    this.setState({ showVideoModal: false, curVideo: {} });
  };

  deleteVideo = async (mediaId) => {
    const { deleteVideo, fetchJWVideos } = this.props;
    await deleteVideo(mediaId);
    fetchJWVideos();
  };

  setFeatured = async (mediaId) => {
    const { setFeaturedVideo, fetchJWVideos } = this.props;
    await setFeaturedVideo(mediaId);
    fetchJWVideos();
  };

  render() {
    const { showVideoModal, curVideo } = this.state;
    const videos = this.props.processAdminVideos();
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

    const defaultSorted = [
      {
        dataField: "title",
        order: "asc",
      },
    ];

    const photoFormatter = (cell, row) => {
      return (
        <img
          className="table-film-photo"
          src={`https://cdn.jwplayer.com/thumbs/${row._id}-720.jpg`}
          alt=""
          onClick={() => this.openVideoModal(row)}
        />
      );
    };

    const adminFormatter = (cell, row) => {
      return <AdminAction onDelete={() => this.deleteVideo(row._id)} />;
    };

    const awardFormatter = (cell, row) => {
      if (!cell) return null;
      return <img className="table-photo" src={cell} alt="" />;
    };

    const featuredFormatter = (cell, row) => {
      if (!row.featured) return null;
      return <img className="table-photo" src={FeaturedIcon} alt="" />;
    };

    const durtFormatter = (cell, row) => {
      return durationFormatter(cell);
    };

    const descFormatter = (cell, row) => {
      return (
        <Tooltip title={cell}>
          <div className="video-table-desc">{cell}</div>
        </Tooltip>
      );
    };

    const columns = [
      {
        dataField: "photo",
        text: "Photo",
        formatter: photoFormatter,
      },
      {
        dataField: "_id",
        text: "Media ID",
      },
      {
        dataField: "title",
        text: "Title",
        sort: true,
      },
      {
        dataField: "duration",
        text: "Duration",
        formatter: durtFormatter,
        sort: true,
      },
      {
        dataField: "author",
        text: "Author",
        sort: true,
      },
      {
        dataField: "director",
        text: "Director",
      },
      {
        dataField: "release_date",
        text: "Release Date",
        sort: true,
      },
      {
        dataField: "genres",
        text: "Genres",
      },
      {
        dataField: "description",
        text: "Description",
        formatter: descFormatter,
      },
      {
        dataField: "award",
        text: "Award",
        formatter: awardFormatter,
      },
      {
        dataField: "featured",
        text: "Featured",
        formatter: featuredFormatter,
        sort: true,
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
            <Card>
              <CardBody>
                <ToolkitProvider
                  bootstrap4
                  keyField="id"
                  data={videos}
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
                        defaultSorted={defaultSorted}
                        pagination={paginationFactory(paginationOptions)}
                      />
                    </React.Fragment>
                  )}
                </ToolkitProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {showVideoModal && (
          <Modal
            title={curVideo.title}
            visible={showVideoModal}
            centered
            width={800}
            footer={false}
            onCancel={this.hideVideoModal}
            className="modal-with-shadow"
          >
            <SinglePlayer playerId="3mvXBqKq" mediaId={curVideo._id} />
            <Checkbox
              className="mt-4 mb-2"
              onChange={() => this.setFeatured(curVideo._id)}
              defaultChecked={curVideo.featured}
            >
              Featured
            </Checkbox>
          </Modal>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwplayer: state.jwplayer,
    admin: state.admin,
  };
}

export default connect(mapStateToProps, {
  processAdminVideos,
  deleteVideo,
  setFeaturedVideo,
  fetchJWVideos,
})(FilmsAll);
