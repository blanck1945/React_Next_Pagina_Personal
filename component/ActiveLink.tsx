import { useRouter } from "next/router";

interface ActiveLinksProps {
  children: any;
  href: string;
}

function ActiveLink({ children, href }: ActiveLinksProps) {
  console.log(href);
  const router = useRouter();
  console.log(router.pathname);
  const style = {
    marginRight: 10,
    fontSize: "1.4rem",
    color: router.pathname === href ? "rgb(34, 87, 211)" : "white",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
