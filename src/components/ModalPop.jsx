import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalPop extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide({ msg: "Cross Icon Clicked!" })}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.props.movie}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalPop;
