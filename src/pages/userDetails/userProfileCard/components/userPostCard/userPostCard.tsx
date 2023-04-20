import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import { getPostByUserId } from "@src/api/users/apiUsers";
import {
  PostContentWrapper,
  UserPostCardWrapper,
  UserPostWrapper,
} from "@src/pages/userDetails/userProfileCard/components/userPostCard/userPostCardStyled";
import { ReactComponent as ArrowLeft } from "@assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "@assets/svg/arrow-right.svg";

interface UserPostCardProps {
  id: number;
}
export const UserPostCard: FC<UserPostCardProps> = ({ id }) => {
  const [postPage, setPostPage] = useState<number>(0);
  const { data, isLoading, isSuccess, isFetching } = useQuery({
    queryFn: () => getPostByUserId(id, postPage),
    queryKey: ["posts", id, postPage],
  });
  const handleNextPost = () => {
    if (Array.isArray(data) && !isFetching && data.length > 0) {
      setPostPage(postPage + 3);
    }
  };
  const handlePrevPost = () => {
    setPostPage((prev) => (prev > 0 ? prev - 3 : 0));
  };
  return (
    <UserPostCardWrapper>
      <h4>Посты</h4>
      <UserPostWrapper>
        <button disabled={!(postPage > 0)} onClick={handlePrevPost}>
          <ArrowLeft />
        </button>
        <ul className="posts">
          {isSuccess && Array.isArray(data)
            ? data.map((post, index) => {
                return (
                  <PostContentWrapper positions={index % 2 === 0} key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                  </PostContentWrapper>
                );
              })
            : null}
        </ul>
        <button
          disabled={!(Array.isArray(data) && !isFetching && data.length > 0)}
          onClick={handleNextPost}
        >
          <ArrowRight />
        </button>
      </UserPostWrapper>
    </UserPostCardWrapper>
  );
};
