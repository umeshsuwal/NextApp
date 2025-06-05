const Footer = () => {
  return (
        <footer className="bg-white py-4 shadow-inner">
            <div className="container mx-auto px-4 text-center text-gray-600">
                © {new Date().getFullYear()} Umesh Suwal
                <div className="mt-2 text-sm">
                    Built with Next.js and Tailwind CSS
                </div>
            </div>
        </footer>
)
}

export default Footer