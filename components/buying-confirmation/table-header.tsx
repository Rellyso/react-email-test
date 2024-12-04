import { Section, Column, Row, Text } from "@react-email/components";
import * as React from "react";

export const BuyingConfirmationTableHeader = () => {
  return (
    <Section id="table-content">
      <Row id="table-heading" className="mb-2">
        <Column align="left" className="w-[48px] sm:w-[64px]">
          <Text className="p-0 m-0 text-[10px] sm:text-xs leading-[18px] font-semibold text-neutral-300">
            Data de cobrança
          </Text>
        </Column>
        <Column align="left" className="w-[48px] sm:w-[64px]">
          <Text className="p-0 m-0 text-[10px] sm:text-xs leading-[18px] font-semibold text-neutral-300">
            Parcelas
          </Text>
        </Column>
        <Column align="left" className="w-[54px] sm:w-[80px]">
          <Text className="p-0 m-0 text-[10px] sm:text-xs leading-[18px] font-semibold text-neutral-300">
            Valor
          </Text>
        </Column>
        <Column align="left">
          <Text className="p-0 m-0 text-[10px] sm:text-xs leading-[18px] font-semibold text-neutral-300">
            Status
          </Text>
        </Column>
      </Row>
    </Section>
  );
};
