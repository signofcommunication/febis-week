import { Container, Section } from "@/components/craft";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Febis Insight",
};

type BlogListTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const blogList: BlogListTypes[] = [
  {
    title: "SDN 4 Taman Sari: Sekolah Ramah Lingkungan dari Sampah Plastik",
    description:
      "SDN 4 Taman Sari menunjukkan bahwa sampah plastik bisa disulap menjadi bangunan kokoh. Sekolah ini menjadi contoh nyata bagaimana kita bisa hidup berdampingan dengan alam.",
    image: "/febis-insight-2.jpg",
    link: "/blog/febis-insight/sdn",
  },
];

export default function Page() {
  return (
    <Section className="about-section">
      <Container className="mt-24 md:grid md:grid-cols-3 md:gap-4">
        {blogList.map((value, index) => (
          <BlogCard {...value} key={index} />
        ))}
      </Container>
    </Section>
  );
}
