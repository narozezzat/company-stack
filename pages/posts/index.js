import FormPage from "@/componenet/FormPage";
import Link from "next/link";



export default function Posts(props) {
    return (
      <>
        <FormPage />
        <div className="container text-center">
          <h1 className="mb-5">Posts Compoenent</h1>
        {props.posts.map(post=> (
          <div key={post.id} className={"my-3 border border-dark p-4"} >
            <Link href={`/posts/${post.id}`}>
                <h3>🤙 {post.title}</h3>
                
                <p>{post.body}</p>
            </Link>
          </div>
        ))}
        </div>
      </>
    )
  }


  export async function getStaticProps() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=20");
    const data = await res.json();

    return {
      props: {
        posts: data
      },
    }
  }
  

  