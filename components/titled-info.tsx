import { Section, Text } from "@react-email/components";
import * as React from "react";

export const TitledInfo = ({
  title,
  info,
}: {
  title: string;
  info: string;
}) => {
  return (
    <Section>
      <Text className="p-0 m-0 text-xs md:text-sm font-normal text-neutral-200">
        {title}
      </Text>
      <Text className="p-0 m-0 text-md sm:text-base font-normal text-neutral-400">
        {info}
      </Text>
    </Section>
  );
};
