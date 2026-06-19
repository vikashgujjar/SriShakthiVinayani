export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-[999] flex flex-col gap-3">
      <a
        href="https://wa.me/919902762211"
        target="_blank"
        rel="noopener"
        className="group flex items-center justify-center w-14 h-14 rounded-full shadow-purple-lg bg-green-500 hover:bg-green-600 hover:-translate-y-1 hover:scale-110 transition-all duration-200 animate-slideInRight"
        title="WhatsApp Us"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.882a.5.5 0 0 0 .614.614l6.023-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.045-1.395l-.362-.215-3.745.915.932-3.643-.236-.375A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
      </a>

      <a
        href="tel:9902762211"
        className="group flex items-center justify-center w-14 h-14 rounded-full shadow-purple-lg bg-purple-gradient hover:scale-110 hover:-translate-y-1 transition-all duration-200 animate-slideInRight"
        title="Call Us"
      >
        <svg className="w-6 h-6 text-white animate-wiggle" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
      </a>
    </div>
  )
}
