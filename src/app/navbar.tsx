import { TabNav } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("pathname", pathname);
  }, []);

  return (
    <TabNav.Root>
      <TabNav.Link href="/" active={pathname === "/"}>
        Home
      </TabNav.Link>
      <TabNav.Link href="/services" active={pathname === "/services"}>
        Services
      </TabNav.Link>
      <TabNav.Link href="/contact" active={pathname === "/contact"}>
        Contact
      </TabNav.Link>
    </TabNav.Root>
  );
};

export default Navbar;
