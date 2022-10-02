import { React, Component } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css"; // untuk style table
$.DataTable = require("datatables.net"); // DataTable

export default class DataTable extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.dataTable = this.$el.DataTable({
            data: this.props.data,
            columns: this.props.columns,
            ...this.props.options
        });
    }

    componentWillUnmount() {
        this.dataTable.destroy(true);
    }

    render() {
        return <table className="display" ref={el => (this.el = el)}></table>;
    }
}
