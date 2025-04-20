import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* الشعار */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-blue-600"
          >
            شركتي
          </button>

          {/* قائمة سطح المكتب (تظهر فقط على الشاشات الكبيرة) */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <NavButton onClick={() => scrollToSection("home")}>الرئيسية</NavButton>
            <NavButton onClick={() => scrollToSection("about")}>من نحن</NavButton>
            <NavButton onClick={() => scrollToSection("services")}>الخدمات</NavButton>
            <NavButton onClick={() => scrollToSection("pricing")}>الأسعار</NavButton>
          </div>

          {/* زر القائمة المتنقلة (يظهر فقط على الشاشات الصغيرة) */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* القائمة المتنقلة (تظهر فقط على الشاشات الصغيرة عند النقر) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <MobileNavButton onClick={() => scrollToSection("home")}>الرئيسية</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection("about")}>من نحن</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection("services")}>الخدمات</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection("pricing")}>الأسعار</MobileNavButton>
        </div>
      )}
    </nav>
  );
};

// مكونات مساعدة
const NavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
  >
    {children}
  </button>
);

const MobileNavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="block w-full text-right py-2 px-3 text-gray-700 hover:text-blue-600 transition-colors"
  >
    {children}
  </button>
);

export default Navbar;