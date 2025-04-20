import SectionWrapper from "@/components/SectionWrapper";

const Aboutus = () => {
  return (
    <SectionWrapper id="about" title="من نحن" bgColor="white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">قصتنا</h3>
          <p className="text-gray-700 leading-relaxed">
            نحن شركة رائدة تأسست عام 2010، متخصصون في تقديم حلول تقنية مبتكرة.
          </p>
          
        </div>
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">صورة الفريق</span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default  Aboutus;