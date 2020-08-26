import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Feature() {
  return (
    <div className="feature-box">
      <i className="fas fa-user-plus fa-2x"></i>
      <div>
        <Button variant="primary" size="sm">
          Add Candidate
        </Button>
      </div>
    </div>
  );
}

export default Feature;

// Add role : <i class="fas fa-plus-circle"></i>
// schedule: <i class="fas fa-clock"></i>
