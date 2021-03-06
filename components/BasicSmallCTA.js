export default function BasicSmallCTA() {
  return (
    <div className="dark:bg-gray-900">
      <section className="mx-auto container w-full py-36">
        <div className="flex flex-col justify-center items-center">
          <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
            <h2>Build the next big thing and ship to market faster</h2>
          </div>
          <div className="flex justify-center items-center mt-16">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-primary-600 to-primary-500 rounded">
              Download Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
