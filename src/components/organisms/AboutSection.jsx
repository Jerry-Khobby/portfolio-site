import React from "react";
import { Highlight } from "../atoms";
import { ContentSection } from "../molecules";

const AboutSection = () => (
  <ContentSection id="about" title="About" spacing="pt-12">
    <div className="flex flex-col gap-[18px]">
      <p className="m-0">
        I'm Jeremiah, a backend and data engineer from Ghana. I like systems where the
        numbers have to be right: payment flows, attendance records, clinical predictions.
        My rule is simple:{" "}
        <Highlight>an API should never show data it hasn't actually retrieved</Highlight>,
        and a pipeline isn't done until its output has been checked.
      </p>
      <p className="m-0">
        Right now I'm a Software / Data Engineer at <Highlight>AmaliTech</Highlight>,
        building Airflow and dbt pipelines, Kafka and Spark streams, and the REST endpoints
        behind internal dashboards. Before that I built APIs at{" "}
        <Highlight>BenchFive</Highlight> and shipped backends in NestJS, FastAPI and
        Django.
      </p>
      <p className="m-0">
        I studied Computer Science at <Highlight>KNUST</Highlight>, where my final-year
        project put a CNN-LSTM sepsis model behind a FastAPI service with SHAP
        explanations. In the evenings I'm building <Highlight>Seatline</Highlight> and{" "}
        <Highlight>SikaTrack</Highlight>, two products for how Ghana actually travels and
        pays.
      </p>
    </div>
  </ContentSection>
);

export default AboutSection;
