import { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;          // معرف القسم (للتوجيه)
  title: string;       // عنوان القسم
  children: ReactNode; // محتوى القسم
  bgColor?: "white" | "gray"; // لون الخلفية
  className?: string;  // كلاسات إضافية
};

const SectionWrapper = ({
  id,
  title,
  children,
  bgColor = "white",
  className = ""
}: SectionWrapperProps) => {
  const bgClass = bgColor === "gray" ? "bg-gray-50" : "bg-white";
  
  return (
    <section 
      id={id}
      className={`py-20 ${bgClass} ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;