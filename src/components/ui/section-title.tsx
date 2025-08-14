interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <>
      <span className={`h-[66px] text-[30px] leading-[1.1] tracking-wider text-white font-[100] ${className}`}>
        {title}
      </span>
      <div className="h-24 flex items-center pb-[30px] border-b border-divider-light" />
    </>
  );
}
