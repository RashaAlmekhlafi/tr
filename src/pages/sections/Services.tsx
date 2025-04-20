import SectionWrapper from "@/components/SectionWrapper";

const Services = () => {
  const services = [
    {
      title: "تطوير الويب",
      description: "تصميم وتطوير مواقع احترافية بتقنيات حديثة"
    },
    {
      title: "تطبيقات الجوال",
      description: "بناء تطبيقات iOS و Android عالية الجودة"
    },
    {
      title: "استشارات تقنية",
      description: "حلول مخصصة لتحسين أداء عملك"
    }
  ];

  return (
    <SectionWrapper id="services" title="خدماتنا" bgColor="gray">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;