export default async function data({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:4000/api/${id}`);
  const user = await response.json()

  return(
    <main>
      <h2 style={{color: "white"}}>{user.title}</h2>
      <p style={{color: "white"}}>{user.description}</p>
    </main>
  );
}
