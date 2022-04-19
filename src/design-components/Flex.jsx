import { useWindowSize } from "../hooks/useWindowSize/useWindowSize";

export const Flex = (props) => {
  const {
    justify,
    align,
    direction,
    flexDirection,
    mt,
    boxShadow,
    children,
    w,
    h,
    maxH,
    maxW,
    minW,
    baseWidth,
    p,
    padding,
    height,
    background,
    borderRadius,
    cursor,
    mb,
    overflowY,
    className,
    onClick,
    flex,
    border,
  } = props;

  const { width } = useWindowSize();

  const containerW = baseWidth ? (width < 765 ? baseWidth : w) : w;

  return (
    <div
      className={`${className}`}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: direction || flexDirection,
        alignItems: align,
        justifyContent: justify,
        marginTop: mt,
        width: containerW,
        height: h || height,
        minWidth: minW,
        maxWidth: maxW,
        maxHeight: maxH,
        padding: p || padding,
        marginBottom: mb,
        background,
        borderRadius,
        cursor,
        overflowY,
        boxPack: "justify",
        flex,
        scrollbarWidth: "thin",
        border,
        boxShadow
      }}
    >
      {children}
    </div>
  );
};

