import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalPop extends Component {
  render() {
    console.log(this.props.body);
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide({ msg: "Cross Icon Clicked!" })}
        >
          <Modal.Body className="text-center">
            <img src={this.props.body.Poster} alt="" />
          </Modal.Body>
          <Modal.Footer>
            <button>Detail Movies</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalPop;
