type ChipProps = {
    label: string;
};

export const Chip = ({ label }: ChipProps) => {
    return (
        <div className="border border-indigo-950 bg-indigo-950/10 px-4 py-2 rounded-lg font-semibold">
            {label}
        </div>
    );
};
