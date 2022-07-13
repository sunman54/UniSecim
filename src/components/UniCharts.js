import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
export default function UniCharts() {

  const [canvas, setCanvas] = useState(false);


  const open = () => {
    setCanvas(!canvas)
    console.log(canvas);
  };

  return (
    <div>
      <Button color="primary" onClick={() => open()}>
        Universitelerim
      </Button>
      <Offcanvas direction="top" isOpen={canvas} toggle={() => open()}>
        <OffcanvasHeader toggle={() => open()}>
        Universitelerim

        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
