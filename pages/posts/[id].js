export default function Post1(props) {
    return (
        <div className="container text-center">
            <h4 className="my-4">Title: {props.post.title}</h4>
            <p>Body: {props.post.body}</p>

        </div>
    );
}

export async function getStaticPaths() {

    const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=15");
    const data = await res.json();
    const paths = data.map(d =>{
        return {
            params: {id: `${d.id}`}
        }
    })

    return {
        paths: paths,
        fallback:false
    }
}

export async function getStaticProps(context){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {
        props:{
            post: data
        }
    }
}
