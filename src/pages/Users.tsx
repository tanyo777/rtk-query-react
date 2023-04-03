import { useGetUsersQuery } from "../api/users";

const Users = () => {
  let content;

  const {
    data: users,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUsersQuery("");

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = <h2>Cannot fetch users!</h2>;
  } else if (isSuccess) {
    content = users.users.map((user: any) => {
      return (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        </div>
      );
    });
  }

  return <div>{content}</div>;
};

export default Users;
