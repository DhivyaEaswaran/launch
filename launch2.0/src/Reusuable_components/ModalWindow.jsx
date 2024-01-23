

import React from "react";
import Popup from "reactjs-popup";
import Button from '@mui/material/Button';

const ModalWindow = ({ triggerText, customContent }) => {
  return (
    <Popup trigger={<Button variant="contained" color="primary">{triggerText}</Button>} modal nested>
      {(close) => (
        <div className="modal">
          <div className="content">
            {customContent}
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={() => close()}>
              Close
            </Button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalWindow;
