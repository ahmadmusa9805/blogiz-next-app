import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/Types";

const BlogLoadingPage =async () => {

const res = await fetch('http://localhost:5000/blogs');
const blogs = await res.json();


  return (
    <div>
        {/* <h1 className="text-center text-4xl text-red-500">Loading.....</h1> */}
        <div className="grid grid-cols-3 gap-4">
            {
                blogs.map((blog: Blog) =>( 
                    <LoadingCard key={blog.id} />

                  ))
            }

        </div>
    </div>
  );
};

export default BlogLoadingPage;