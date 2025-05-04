export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Riddhi More. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Designed and Developed by Riddhi More using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
