interface DefinitionItem {
    label: string;
    value: string;
}

const DefinitionList = ({ items }: { items: DefinitionItem[] }) => {
    return (
        <dl className="divide-y divide-border border-t border-b border-border">
            {items.map((item) => (
                <div key={item.label} className="grid grid-cols-3 gap-4 py-3">
                    <dt className="label-text col-span-1">{item.label}</dt>
                    <dd className="col-span-2 text-sm text-foreground">{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default DefinitionList;
