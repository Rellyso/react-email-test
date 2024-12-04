import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import tailwindConfig from "../tailwind.config";
import { WhiteContainer } from "../components/white-container";
import { BuyingConfirmationTableContent } from "../components/buying-confirmation/table-content";
import { BuyingConfirmationTableHeader } from "../components/buying-confirmation/table-header";
import { CsLogo } from "../components/cs-logo";
import { TitledInfo } from "../components/titled-info";

const BuyingConfirmationEmail = () => {
  return (
    <Tailwind config={tailwindConfig}>
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="regular"
          />
        </Head>
        <Preview>Compra realizada</Preview>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto max-w-[500px]">
            <Section id="header" className="text-black p-8 mx-auto">
              <CsLogo />
            </Section>
            <Section id="hero" className="text-black bg-success-dark p-6">
              <Row>
                <Column align="right">
                  <Img
                    className="h-16 sm:h-32"
                    src="https://i.ibb.co/M9YYMCZ/image.png"
                  />
                </Column>
                <Column align="left" className="text-white">
                  <Section>
                    <Text className="w-fit m-0 px-4 bg-white rounded-full text-success-dark">
                      Boticário
                    </Text>
                    <Text className="m-0 text-2xl font-normal sm:text-3xl">
                      Compra realizada
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section
              id="content"
              className="text-black p-6 pt-8 bg-neutral-100 mx-auto "
            >
              <WhiteContainer>
                <Text className="text-base font-normal text-neutral-500">
                  Olá <strong className="text-neutral-600">[nome]</strong>,
                  parabéns! Tudo certo com seu pedido! Você pode aproveitar sua
                  compra, sabendo que não terá o limite do cartão de crédito
                  comprometido com o valor total da sua compra e com parcelas
                  que cabem no seu bolso
                </Text>
              </WhiteContainer>

              <Section className="mt-4">
                <Heading className="text-2xl font-semibold text-neutral-600">
                  Confira os detalhes da sua compra
                </Heading>

                <WhiteContainer>
                  <Row>
                    <Column align="left" width={"50%"}>
                      <TitledInfo
                        title="Loja"
                        info="Marques leão suplementos"
                      />
                    </Column>
                  </Row>
                  <Row className="mt-6">
                    <Column align="left" width={"50%"}>
                      <TitledInfo title="Valor do pedido" info="R$ 999,99" />
                    </Column>
                    <Column align="left" width={"50%"}>
                      <TitledInfo title="Parcelas" info="R$ 9999,99" />
                    </Column>
                  </Row>
                  <Row className="mt-6">
                    <Column align="left" width={"50%"}>
                      <TitledInfo title="Data de cobrança" info="11/02" />
                    </Column>
                    <Column align="left" width={"50%"}>
                      <TitledInfo title="Data de pagamento" info="11/02" />
                    </Column>
                  </Row>
                </WhiteContainer>
              </Section>

              <Section className="mt-4">
                <Row className="bg-primary-500 rounded-lg p-6">
                  <Column>
                    <Img
                      src="https://i.ibb.co/d2fSQB5/image.png"
                      className="w-10 h-10 sm:w-14 sm:h-14"
                    />
                  </Column>
                  <Column className="pl-2">
                    <Text className="p-0 m-0 text-sm sm:text-base font-normal text-white">
                      Você também receberá informações sobre as próximas
                      parcelas neste endereço de e-mail
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section className="mt-4">
                <Heading className="text-2xl font-semibold text-neutral-600">
                  Confira os pagamentos
                </Heading>

                <WhiteContainer>
                  <BuyingConfirmationTableHeader />
                  <BuyingConfirmationTableContent
                    items={[
                      {
                        date: "11/02",
                        installment: 1,
                        totalInstallments: 10,
                        value: "R$ 999,99",
                        status: "Paga",
                      },
                      {
                        date: "11/02",
                        installment: 1,
                        totalInstallments: 10,
                        value: "R$ 999,99",
                        status: "Pendente",
                      },
                      {
                        date: "11/02",
                        installment: 1,
                        totalInstallments: 10,
                        value: "R$ 999,99",
                        status: "Pendente",
                      },
                    ]}
                  />
                </WhiteContainer>
              </Section>
              <Section className="mt-4">
                <Heading className="text-2xl font-semibold text-neutral-600">
                  Em caso de duvidas, fale conosco
                </Heading>

                <WhiteContainer>
                  <Row>
                    <Column align="left">
                      <Text className="p-0 m-0 text-base font-normal text-neutral-300">
                        Horários:
                      </Text>
                      <Text className="p-0 m-0 text-base font-normal text-neutral-400">
                        De segunda-feira à sexta-feira das 8h às 18h Sábados das
                        8h às 12h
                      </Text>
                    </Column>
                  </Row>
                  <Row className="mt-4">
                    <Column align="left">
                      <Text className="p-0 m-0 text-base font-normal text-neutral-300">
                        E-mail:
                      </Text>
                      <Text className="p-0 m-0 text-base font-normal text-neutral-400 break-all">
                        atendimento@cartaosimples.com.br
                      </Text>
                    </Column>
                  </Row>
                  <Row className="mt-4">
                    <Column align="left">
                      <Text className="p-0 m-0 text-base font-normal text-neutral-300">
                        Whatsapp:
                      </Text>
                      <Text className="p-0 m-0 text-base font-normal text-neutral-400">
                        (47) 9772-4516
                      </Text>
                    </Column>
                  </Row>
                  <Button
                    href="https://wa.me/554797724516"
                    className="mt-[10px] bg-primary-500 rounded-base px-6 py-4 text-white"
                  >
                    Conversar por Whatsapp
                  </Button>
                </WhiteContainer>
              </Section>
              <Section className="mt-10">
                <CsLogo />
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default BuyingConfirmationEmail;
