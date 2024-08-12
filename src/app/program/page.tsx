import { Container, Section } from "../../../components/craft";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Febis Week 2024 Programs",
  description: "Febis Week 2024 Programs",
};

export default function Program() {
  return (
    <Section>
      <Container className="mt-24">
        <div className="not-prose mt-4 flex flex-col gap-4 md:flex-wrap">
          <a
            href="/program/events/seminar"
            className="text-center matana-base-color-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Seminar
          </a>
          <a
            href="/program/events/workshop"
            className="text-center matana-base-color-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Workshop
          </a>
          <a
            href="/program/competitions/essay-debat"
            className="text-center matana-base-color-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Lomba Essay Debat
          </a>
          <a
            href="/program/competitions/cerdas-cermat"
            className="text-center matana-base-color-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Lomba Cerdas Cermat
          </a>
          <a
            href="/program/competitions/desain-produk"
            className="text-center matana-base-color-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Lomba Desain Produk
          </a>
        </div>
      </Container>
    </Section>
  );
}
