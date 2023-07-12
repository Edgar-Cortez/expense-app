export enum ReportType {
    EXPENSE = "expense",
    INCOME = "income"
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "Irrigation Course",
            amount: 10000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid3",
            source: "Groceries",
            amount: 400,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: "uuid4",
            source: "Credit Card Payment",
            amount: 100,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
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
    }[]
}


