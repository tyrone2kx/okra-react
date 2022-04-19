export const Input = (props) => {
  const { mt, ...rest } = props;
  return (
    <input
      style={{
        border: "1px solid #ECECEC",
        padding: "15px",
        fontSize: "14px",
        borderRadius: "10px",
        marginTop: mt,
      }}
      {...rest}
    />
  );
};

