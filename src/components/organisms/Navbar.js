"use client";
import { useRouter } from "next/navigation";
import { backgroundColor, navData, primaryColor } from "@/data";
import { Navbar as NavbarV2 } from "ecommerce-mxtech";
import { useInformation } from "@/store/useInformation";


const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();

  return (
    <NavbarV2
      styleHeader={{
        height: 100,
      }}
      linksProps={{
        variant: "button",
        align: "center",

      }}
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: "w-36",
      }}

      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push("/my-cart"),
      }}
      buttonContactProps={{
        onClick: () => router.push("/more-information"),
      }}
      withSearch={false}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => { }}
      backgroundColor={backgroundColor}
      stylesContentLink={{
        backgroundColor: "#4B0082",
        justifyContent: "center",
      }}
    />
  );
};

export default Navbar;
