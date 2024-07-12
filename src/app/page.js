"use client";
import {
  Missions,
  ProductSection,
  References,
  Typography,
  ListFeatures,
  Hero,
  FeaturesV2
} from "ecommerce-mxtech";
import { MdOutlineArchitecture } from "react-icons/md";
import { useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useInformation } from "@/store/useInformation";
import { backgroundColor, primaryColor } from "@/data";


export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  return (
    <main
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Navbar />
      <Hero
        variant="background-img"
        src={dataSite.image_hero}
        withSubView
        nameSite="Empowering Your Brand"
        styleImage={{
          borderRadius: 20,
        }}
        stylesContainerImage={{
          padding: 90
        }}
        isFixed
        classNamePrincipalText="text-white font-medium text-4xl"
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        sty
      />

      <div className="flex flex-col" id="features">
        <FeaturesV2
          features={dataSite.services.map((feature) => ({
            title: feature.title,
            description: feature.description,
            src: feature.image
            ,
          }))}
          onClickButton={() => {
            router.push("/more-information")
          }}
          gridColumns={3}
          backgroundColor={primaryColor}
          borderRadius={10}
          variant="text"
          textColorTitle={primaryColor}
          version="v1"

        />
      </div>
      <div className="container mx-auto flex flex-col gap-20 my-24">
        <div id="products">
          <Typography.Title
            level={2}
            style={{
              color: primaryColor,
            }}
            className="font-medium mb-10 text-center"
          >
            Our Courses
          </Typography.Title>
          {dataSite.products.length > 1 && (
            <ProductSection
              withTitles={false}
              gridColumns={2}
              title=""
              variant="grid"
              productItemVariant="horizontal"
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              stylesItem={{
                backgroundColor: primaryColor,
                borderRadius: 10,
              }}
              productVersion="3"
              carouselOptions={{
                backgroundColor: "transparent",
                arrowColor: "blue"
              }}
            />
          )}
        </div>
        <div className="flex flex-col px-28" id="mission">
          <Typography.Title
            level={2}
            color={primaryColor}
            style={{
              color: primaryColor,

            }}
            className="font-medium mb-10 text-center"
          >
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            borderRadius={10}
            variant="text"
            textColor={primaryColor}
          />
        </div>

        <div className="flex flex-col" id="references">
          <Typography.Title
            level={3}
            className="font-medium mb-10 text-center"
          >
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: "black",
              fade: false,
              autoPlay: true,
              direction: "horizontal",
              autoPlaySpeed: 5000,

            }}
            textColor={primaryColor}
            variantItem="text"
            variant="carousel"
            backgroundColor={"#E5E5E5"}
            borderRadius={10}
            references={dataSite.references}
            gridColumns={3}
            titleAlign="center"
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
