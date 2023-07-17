import React from "react";
import { AiOutlineCloudUpload, AiOutlineClear } from "react-icons/ai";
import PropTypes from "prop-types";


function EventCard({ selector, onApply, onClear, active }) {
  return (
    <div className="anwg-events-list-item">
      <code className="anwg-events-list-item__selector">
        { selector }
      </code>
      <div className="anwg-events-list-item__actions">
        {
          !active && (
            <AiOutlineCloudUpload className="anwg-events-list-item__actions__item" onClick={onApply}/>
          )
        }
        <AiOutlineClear className="anwg-events-list-item__actions__item" onClick={onClear}/>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  name: PropTypes.string,
  onApply: PropTypes.func,
  onClear: PropTypes.func,
};

export default EventCard;
