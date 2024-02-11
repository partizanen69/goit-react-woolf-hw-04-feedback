export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="chapter-name">{title}</h2>
      {children}
    </section>
  );
};
