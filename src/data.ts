export enum ReportType {
  EXPENSE = 'expense',
  INCOME = 'income',
}

export const data: Data = {
  report: [
    {
      id: 'ea887870-9835-4335-8dd9-758faba3481f',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'bebe5d11-b7d7-426f-b7ae-b3e9811df2a4',
      source: 'Irrigation Course',
      amount: 10000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'ad9356eb-60aa-449e-8003-b1704a7ab213',
      source: 'Groceries',
      amount: 400,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '3839f39c-e04e-4be3-8c7e-9131197183c5',
      source: 'Credit Card Payment',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
