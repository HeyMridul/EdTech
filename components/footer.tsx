import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">EduSuccess</h3>
            <p className="text-sm text-gray-500">
              Empowering students to achieve academic excellence through quality education.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-500 hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-gray-500 hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="h-4 w-4" />
                info@edusuccess.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                123 Education St, City
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduSuccess. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

