import Nav from "./Nav";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div
      className="grid"
      style={{ height: "100vh", width: "100vw", gridTemplateRows: "70px 1fr" }}
    >
      <Nav />
      <main style={{ marginTop: 70 }}>{children}</main>
    </div>
  );
};

export default Layout;
