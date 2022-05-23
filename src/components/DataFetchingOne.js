import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  return (
    <div>
      <h1>Data Fetching</h1>
    </div>
  );
}

export default DataFetchingOne;
