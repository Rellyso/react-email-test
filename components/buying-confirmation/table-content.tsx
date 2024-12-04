import { Section, Column, Row, Text } from "@react-email/components";
import * as React from "react";

interface ItemProps {
  date: string;
  installment: number;
  totalInstallments: number;
  value: string;
  status: "Pendente" | "Paga";
}

interface BuyingConfirmationTableContentProps {
  items: ItemProps[];
}

export const BuyingConfirmationTableContent = ({
  items,
}: BuyingConfirmationTableContentProps) => {
  return (
    <Section id="table-content">
      {items.map((item) => (
        <Row className="pb-2">
          <Column className="w-[48px] sm:w-[64px]" align="left">
            <Text className="p-0 m-0 text-[10px] sm:text-sm leading-[18px] font-semibold text-neutral-400">
              {item.date}
            </Text>
          </Column>
          <Column className="w-[48px] sm:w-[64px]" align="left">
            <Text className="p-0 m-0 text-[10px] sm:text-sm leading-[18px] font-semibold text-neutral-400">
              {item.installment}/{item.totalInstallments}
            </Text>
          </Column>
          <Column className="w-[54px] sm:w-[80px]" align="left">
            <Text className="p-0 m-0 text-[10px] sm:text-sm leading-[18px] font-semibold text-neutral-400">
              {item.value}
            </Text>
          </Column>
          <Column align="left">
            <Text
              className={`px-4 sm:px-1 py-0.5 m-0 text-[10px] sm:text-sm leading-[18px] font-normal text-neutral-400 rounded-full text-center ${
                item.status === "Pendente"
                  ? "text-warning-dark bg-warning-light"
                  : "text-success-dark bg-success-light"
              }`}
            >
              {item.status}
            </Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
};
