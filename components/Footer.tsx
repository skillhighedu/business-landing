import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import CalButton from "./CalButton";
import { HugeIcon } from "@/utils/hugeicons";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 relative overflow-hidden mt-6">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="SkillHigh Logo"
              width={150}
              height={150}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white">SkillHigh</span>
          </div>
          <p className="mt-4 text-neutral-950 text-sm leading-relaxed max-w-xs">
            Tools built to help businesses grow, manage, and scale with ease.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-green-800 font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
          </ul>
        </div>

        {/* Company Links */}
        {/* <div>
          <h4 className="text-green-800 font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div> */}

        {/* Legal Links */}
        <div>
          <h4 className=" font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            {/* <li><a href="#" className="hover:text-white">Cookie Policy</a></li> */}
          </ul>
        </div>
        {/* Call-to-Action Section */}
      <div className="relative flex flex-col items-center py-4">
        {/* Curved Arrow pointing at button */}
     
        <HugeIcon name="arrowTurningUp" size={56} className="text-green-800 mb-4 absolute left-64 sm:left-48 " />

        <CalButton label="Book a meet" />
      </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillHigh. All rights reserved.
      </div>
    </footer>
  );
}
