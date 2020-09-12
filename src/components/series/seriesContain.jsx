import React from "react";
import Series from "./series";
import { connect } from "react-redux";
import * as axios from "axios";
import { setDataInSeries } from "../../redux/seriesReducer";

class SeriesContain extends React.Component {
  componentDidMount = () => {
    axios
      .get("https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11")
      .then((responce) => this.props.setDataInSeries(responce.data));
  };
  render() {
    return (
      <Series
        sezon_1={this.props.sezon_1}
        sezon_1_data={this.props.sezon_1_data}
      />
    );
  }
}
let mapStateToPRops = (state) => {
  return {
    sezon_1: state.seriesPage.sezon_1,
    sezon_1_data: state.seriesPage.sezon_1_data,
  };
};
let mapDispatchToProps = {
  setDataInSeries,
};
export default connect(mapStateToPRops, mapDispatchToProps)(SeriesContain);
