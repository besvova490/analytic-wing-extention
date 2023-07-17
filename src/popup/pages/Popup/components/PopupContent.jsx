import React from "react";
import { Skeleton, Alert } from "antd";
import PropTypes from "prop-types";

// components
import OverviewSimpleCard from "../../../../components/OverviewSimpleCard";


function PopupContent({ isLoading, error, data }) {
  switch (true) {
    case isLoading:
      return <Skeleton active/>;
    case !!error:
      return <Alert message={error.message} type="error"/>;
    case !!data:
      return (<>
        <OverviewSimpleCard
          label="Views"
          value={data.groupedByEvent?.page_view || "-"}
        />
        <OverviewSimpleCard
          label="Clicks"
          value={data?.groupedByEvent?.click || "-"}
        />
        <OverviewSimpleCard
          label="Desktop"
          value={data?.groupedByDevise?.desktop || "-"}
        />
        <OverviewSimpleCard
          label="Mobile"
          value={data?.groupedByDevise?.mobile || "-"}
        />
      </>);
    default:
      return null;
  }
}

PopupContent.propTypes = { isEmpty: PropTypes.bool, };

export default PopupContent;
