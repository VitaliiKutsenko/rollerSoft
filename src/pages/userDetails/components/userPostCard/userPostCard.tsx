import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import { getPostByUserId } from "@src/api/users/apiUsers";
import { UserPostCardWrapper } from "@src/pages/userDetails/components/userPostCard/userPostCardStyled";

interface UserPostCardProps {
  id: number;
}
export const UserPostCard: FC<UserPostCardProps> = ({ id }) => {
  const [postPage, setPostPage] = useState<number>(0);
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getPostByUserId(id, postPage),
    queryKey: ["posts", postPage],
  });
  console.log(data);
  const handleNextPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPostPage((prev) => prev + 1);
  };
  const handlePrevPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPostPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <UserPostCardWrapper>
      <button onClick={handlePrevPost}> - </button>
      {isSuccess && Array.isArray(data)
        ? data.map((post) => {
            return (
              <ul key={post.id}>
                <li>{post.title}</li>
                <li>{post.body}</li>
              </ul>
            );
          })
        : null}
      <button onClick={handleNextPost}> + </button>
    </UserPostCardWrapper>
  );
};
