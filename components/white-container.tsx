import { Section } from "@react-email/components";
import * as React from "react";

export const WhiteContainer = ({ children }: { children: React.ReactNode }) => {
  return <Section className="p-6 bg-white rounded-lg">{children}</Section>;
};
