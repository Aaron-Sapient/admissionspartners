export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#faf9f4]">
      <h1 className="text-3xl font-bold mb-4">Checkout Canceled</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        No worries — you weren’t charged.  
        You can return to the checkout page whenever you're ready.
      </p>

      <a
        href="/partnership"
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
      >
        Back to Checkout
      </a>
    </div>
  );
}