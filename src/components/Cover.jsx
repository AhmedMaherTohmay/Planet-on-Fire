function Cover({ img }) {
  return (
    <img
      src={img}
      style={{
        position: "absolute",
        top: "25%",
        left: "25%",
      }}
    />
  );
}

export default Cover;
