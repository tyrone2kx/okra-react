
export const Text = (props) => {
  const {
    textTransform,
    children,
    fontWeight,
    fontSize = "14px",
    mt,
    color,
    ml,
    w,
    textAlign
  } = props;
  return (
    <p
      style={{
        textTransform,
        fontWeight,
        fontSize,
        marginTop: mt,
        color,
        marginLeft: ml,
        width: w,
        textAlign
      }}
    >
      {children}
    </p>
  );
};

