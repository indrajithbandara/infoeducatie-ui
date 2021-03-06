"use strict";

import React from "react";
import _ from "lodash";
import { ButtonInput } from "react-bootstrap";

import FormMixin from "../../mixins/form"


export default React.createClass({
  displayName: "RegisterFinish",
  mixins: [FormMixin],

  render() {
    return <form onSubmit={this.onFormSubmit}>
      <p>Trimite proiectul tău&nbsp;
      <em>{this.props.pending_project_title}</em>.</p>
      <ButtonInput type="submit"
                   value="Termină"
                   disabled={this.state.waitingForServerResponse} />
      {this.renderErrors()}
    </form>;
  },

  getFormData() {
    return {};
  }
});
