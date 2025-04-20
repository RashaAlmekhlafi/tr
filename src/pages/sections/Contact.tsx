import SectionWrapper from "@/components/SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="اتصل بنا">
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block mb-1">الاسم الكامل</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="أدخل اسمك"
          />
        </div>
        <div>
          <label className="block mb-1">البريد الإلكتروني</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="example@domain.com"
          />
        </div>
        <div>
          <label className="block mb-1">الرسالة</label>
          <textarea 
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
            placeholder="اكتب رسالتك هنا..."
          ></textarea>
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          إرسال
        </button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;