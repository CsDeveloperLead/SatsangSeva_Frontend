import { useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from "prop-types";
import '../Csss/CreateEvents.css'; // Import the external CSS file

const CreateEvents = ({
  className = "",
  listYourOwnEvent,
  propFlex,
  propAlignSelf,
}) => {
  const createEventsStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);


  return (
    <div
      className={`create-events-container ${className}`}
      style={createEventsStyle}
    >
      <img
        className="create-events-image"
        loading="lazy"
        alt=""
        src="/untitled-design-3-1@2x.png"
      />
      <div className="create-events-content">
        <h1 className="create-events-heading">
          {listYourOwnEvent}
        </h1>
        <div className="create-events-description">
<<<<<<< HEAD
          <p className="text-xl">Create and list your Satsang event to connect <br/> with like-minded souls. </p>
=======
          <p>Create & list your event to connect <br/> with like-minded souls. </p>
>>>>>>> 2056c635d52b825ffe7718ceb8ba237cd84f7cf4
        </div>
        <Button
          className="create-events-button"
          variant="contained"
        >
          <Link className="text-white no-underline" to="/event-listing#form">Create Events</Link>
        </Button>
      </div>
    </div>
  );
};

CreateEvents.propTypes = {
  className: PropTypes.string,
  listYourOwnEvent: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default CreateEvents;
