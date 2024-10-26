import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "./User";

function Users() {
  const fetchUsers = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["users"],
    fetchUsers,
    {
      //   cacheTime: 2 * 1000,
      //   staleTime: 5 * 1000,
      //   refetchOnMount: false,
      //   refetchOnWindowFocus: false,
      //   refetchInterval: 5 * 1000,
      enabled: false,
      onSuccess: () => {
        console.log("success");
      },
      onError: (error) => {
        console.log(error.message);
      },
    }
  );
  console.log({ data, isLoading, isError, error, isFetching });

  if (isError)
    return <h2>Something Went Wrong... Please try later! {error.message}</h2>;

  return (
    <div>
      <h3>Users:</h3>
      <button onClick={refetch}>Show The Users!</button>
      {isLoading && isFetching && <h1>Loading...</h1>}
      {!isLoading &&
        data.data.map((i) => (
          <Link to={`/users/${i.id}`} key={i.id} >
            <h3> {i.name}</h3>
          </Link>
        ))}
    </div>
  );
}

export default Users;
