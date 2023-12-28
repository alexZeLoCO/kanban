export type ColumnProps = {
    columnName: string;
};

export const Column: (props: ColumnProps) => JSX.Element = ({ columnName }: ColumnProps) => {
    return (
        <div>
            <h2>{columnName}</h2>
        </div>
    );
};