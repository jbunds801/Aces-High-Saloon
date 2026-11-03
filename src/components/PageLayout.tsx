import NavBar from "./NavBar"


type PageLayoutProps = {
  children?: React.ReactNode;
};


const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>PageLayout</div>
      <div className="p-5">{children}</div>
    </>
  );
};

export default PageLayout