
export const Avatar = (props) => {
  const { src } = props;
  return (
    <img
      style={{
        borderRadius: "50%",
        height: "50px",
        width: "50px",
      }}
      src={src}
    />
  );
};

