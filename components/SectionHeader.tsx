const SectionHeader = ({ number, label }: { number: string; label: string }) => {
    return (
        <div className="mb-12 pb-3 flex items-center gap-3 border-b border-border">
            <span className="label-text">{number}</span>
            <span className="label-text">{label}</span>
        </div>
    );
};

export default SectionHeader;
