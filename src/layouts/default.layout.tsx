import { ReactNode } from "react";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDListElement> {
  children: ReactNode;
}

const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <main {...props} className={className}>
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
