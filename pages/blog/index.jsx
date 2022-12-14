import Link from "next/link";
import Layout from "../../components/Layout";

export default function index({ data }) {
  return (
    <Layout
      title="Lista de Posts escritos por mi"
      description="Esta es la lista de posts escritos por mi"
    >
      <h1>Lista de artículos</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
                {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.log(error);
  }
}
