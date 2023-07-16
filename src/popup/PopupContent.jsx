import React from "react";
import { Empty, Skeleton, Alert } from "antd";
import PropTypes from "prop-types";

// components
import AuthForm from "../containers/Forms/AuthForm";
import OverviewSimpleCard from "../components/OverviewSimpleCard";


function PopupContent({ isEmpty, isLoading, error, data }) {
  switch (true) {
    case isEmpty:
      return (<>
        <Empty description="Please proved user/web app token to see analytics info"/>
        <AuthForm/>
      </>);
    case isLoading:
      return <Skeleton active/>;
    case !!error:
      return <Alert message={error.message} type="error"/>;
    case !!data:
      return (<>
        <OverviewSimpleCard
          label="Views"
          value={data?.groupedByEvent.page_view || "-"}
        />
        <OverviewSimpleCard
          label="Clicks"
          value={data?.groupedByEvent.click || "-"}
        />
        <OverviewSimpleCard
          label="Desktop"
          value={data?.groupedByDevise.desktop || "-"}
        />
        <OverviewSimpleCard
          label="Mobile"
          value={data?.groupedByDevise.mobile || "-"}
        />
      </>);
    default:
      return null;
  }
}

PopupContent.propTypes = { isEmpty: PropTypes.bool, };

export default PopupContent;
