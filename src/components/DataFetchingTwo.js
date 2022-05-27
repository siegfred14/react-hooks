import React, { useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = () => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <h1>
        {state.loading ? "loading" : state.post.title}
        {state.error ? error : null}
      </h1>
    </div>
  );
}

export default DataFetchingTwo;

// useState v useReducer
// Scenario            -          useState            -        useReducer
// Type of State           Number, String, Boolean         Object or Array
// No of state transitions        one or two                    too many
// Related state transitions        No                            Yes
// Business Logic             No business logic           Complex Business Logic
// Local v Global state           local                           global
