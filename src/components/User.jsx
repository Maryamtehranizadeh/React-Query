import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function User() {
  const { id } = useParams();
  const fetchUserDetails = ({ queryKey }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
  };

  const { data, isLoading, isError } = useQuery(
    ["users", id],
    fetchUserDetails
  );
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading user data.</h2>;
  console.log(data.data);

  return (
    <div>
      <h2>User {id}</h2>
      <h4>{data.data.name}</h4>
    </div>
  );
}

export default User;
