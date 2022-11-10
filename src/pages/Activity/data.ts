export type OptionResponse = "A" | "B" | "C" | "D";

export type Question = {
  category: string;
  question: string;
  options: {
    id: string;
    option: string;
    alternative: OptionResponse;
  }[];
  response: OptionResponse;
};

export const questionData: Question[] = [
  {
    category: "Ética",
    question: `   O advogado César foi procurado pelo cliente Vinícius, que
                    pretendia sua atuação defendendo-o em processo judicial.
                    Ambos, então, ajustaram certo valor em honorários, por meio
                    de contrato escrito. Na fase de execução do processo, César
                    recebeu pagamentos de importâncias devidas a Vinícius e
                    pretende realizar a compensação com os créditos de que é
                    titular. Com base no caso narrado, assinale a afirmativa
                    correta.`,
    options: [
      {
        id: "1",
        option: ` É admissível a compensação de créditos apenas na hipótese
                            de o contrato de prestação de serviços a autorizar; se for
                            silente o contrato, é vedada, mesmo diante de autorização
                            posterior pelo cliente.`,
        alternative: "A",
      },
      {
        id: "2",
        option: ` É admissível a compensação de créditos apenas na hipótese
                            de o contrato de prestação de serviços a autorizar; se for
                            silente o contrato, é vedada, mesmo diante de autorização
                            posterior pelo cliente.`,
        alternative: "B",
      },
      {
        id: "3",
        option: ` É admissível a compensação de créditos apenas na hipótese
                            de o contrato de prestação de serviços a autorizar; se for
                            silente o contrato, é vedada, mesmo diante de autorização
                            posterior pelo cliente.`,
        alternative: "C",
      },
      {
        id: "4",
        option: ` É admissível a compensação de créditos apenas na hipótese
                            de o contrato de prestação de serviços a autorizar; se for
                            silente o contrato, é vedada, mesmo diante de autorização
                            posterior pelo cliente.`,
        alternative: "D",
      },
    ],
    response: "A",
  },
];
