export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#faf9f4]">
      <h1 className="text-3xl font-bold mb-4">Payment Successful 🎉</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Thank you! Your payment has been processed.  
        A confirmation email will arrive shortly.
      </p>

      <a
        href="/"
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
      >
        Return Home
      </a>
    </div>
  );
}