"use client"

import React, { useState } from 'react';

const LikeDislikeButton = ({
  filled,
  notFilled,
  filledDislike,
  notFilledDislike,
}: {
  filled: string;
  notFilled: string;
  filledDislike: string;
  notFilledDislike: string;
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
    } else {
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDisliked(true);
      setLiked(false);
    } else {
      setDisliked(false);
    }
  };

  return (
    <div>
      <button onClick={handleLike}  className={`transform transition-transform duration-300 ease-in-out mr-1 ${liked ? 'scale-110' : 'scale-100'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={`text-black cursor-pointer ${liked ? 'active' : ''}`}
        >
          <path d={liked ? filled : notFilled} />
        </svg>
      </button>

      <button onClick={handleDislike} className={`transform transition-transform duration-300 ease-in-out ${disliked ? 'scale-110' : 'scale-100'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={`text-black cursor-pointer ${disliked ? 'active' : ''}`}
        >
          <path d={disliked ? filledDislike : notFilledDislike} />
        </svg>
      </button>
    </div>
  );
};

export default LikeDislikeButton;
