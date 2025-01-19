import LatestBlogs from "../components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  
  const res = await fetch("http://localhost:5000/blogs", {
    // cache: "no-cache",
    // cache: "force-cache",
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  console.log(blogs);

  return (
    <>
      <LatestBlogs Blogs={blogs} />
    </>
  );
};

export default HomePage;
