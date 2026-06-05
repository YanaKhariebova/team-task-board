import { PublicFooter } from "./footer/public.footer";
import { PublicNavbar } from "./navbar/public.navbar";

export function PublicLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    </>
  );
}
