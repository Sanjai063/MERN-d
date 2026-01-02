function Home({ name, title, intro }) {
  return (
    <section>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{intro}</p>
    </section>
  );
}

export default Home;