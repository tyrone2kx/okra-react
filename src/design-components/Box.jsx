export const Box = (props) => {
  const { mt, p = "0px", children, cursor, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        marginTop: mt,
        padding: p,
        cursor,
      }}
    >
      {children}
    </div>
  );
};
