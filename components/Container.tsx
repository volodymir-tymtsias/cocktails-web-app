type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    // <div className="mx-auto max-w-[290px] sm:max-w-[605px] lg:max-w-[870px] xl:max-w-[1235px] 2xl:max-w-[1550px]">
    <div className="mx-auto px-4 sm:px-12 xl:px-28 2xl:max-w-[1774px]">
      {children}
    </div>
  );
};

export default Container;
