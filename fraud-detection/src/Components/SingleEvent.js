import React, { Component } from 'react';

class SingleEvent extends Component {
  render() {
    console.log(this.props);
    const { event } = this.props;

    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-5">{event.name}</div>
          <div className="col-md-3">{event.ingest_time_ms}</div>
          <div className="col-md-3">{event.fraud_probability}</div>
          <div>
            <button type="button" class="btn btn-secondary btn-sm">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
