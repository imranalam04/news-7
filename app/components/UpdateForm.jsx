"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UpdateForm = ({value}) => {
  const router = useRouter();
  const [title, setTitle] = useState(value.title);
  const [author, setAuthor] = useState(value.author);
  const [content, setContent] = useState(value.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await fetch(`/api/post/${value._id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    });
    data = await data.json();
    console.log(data);
    router.push("/");
  };

  return (
    <div className="w-6/12 mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg font-sans font-bold">Insert here To Update</h1>
        <div className="flex flex-col mb-3 py-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full px-3 py-2 shadow-xl"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border w-full px-3 py-2 shadow-xl"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            rows={5}
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border w-full px-3 py-2 shadow-xl"
          ></textarea>
        </div>
        <div className="flex">
          <input
            type="submit"
            className="w-full bg-teal-500 text-white px-3 py-2 rounded w-ful"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
