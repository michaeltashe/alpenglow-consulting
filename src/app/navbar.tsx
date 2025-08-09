import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("pathname", pathname);
  }, []);

  return (
    <TabNav.Root>
      <Link href="/">
      <TabNav.Link active={pathname === "/"}>
        Home
      </TabNav.Link>
      </Link>
      <Link href="/services">
      <TabNav.Link active={pathname === "/services"}>
        Services
      </TabNav.Link>
      </Link>
      <Link href="/contact">
      <TabNav.Link href="/contact" active={pathname === "/contact"}>
        Contact
      </TabNav.Link>
      </Link>
    </TabNav.Root>
  );
};

export default Navbar;
