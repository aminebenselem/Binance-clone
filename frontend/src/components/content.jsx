export function Content() {
  return (
    <div id="content" className="min-h-screen bg-[#181a20] flex items-center justify-center px-10">
      <div className="flex w-full max-w-7xl gap-6 items-start mt-20">
        <div className="w-2/3 px-5">
          <p className="text-white font-bold text-7xl leading-tight">
            <span className="text-yellow-400">200,000,000</span>
            <br /> USERS <br /> TRUST US
          </p>

          <div className="flex mt-4">
            <input
              type="text"
              className="w-1/3 p-3 rounded-md bg-[#181a20] border-2 border-[#2f323b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email / phone number"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 w-1/3 ml-2 rounded-md font-medium text-black">
              Sign up
            </button>
          </div>
        </div>

        <div className="flex flex-col w-1/3 gap-15">
          <div className="flex-1 bg-[#2f323b] rounded-2xl p-5 text-white">
            <h2 className="text-xl font-bold mb-3">Top Coins</h2>
            <ul className="space-y-6">
              <li>Bitcoin (BTC) - $60,000</li>
              <li>Ethereum (ETH) - $3,000</li>
              <li>BNB - $500</li>
              <li>Solana (SOL) - $150</li>
            </ul>
          </div>

          <div className="flex-1 bg-[#2f323b] rounded-2xl p-5 text-white">
            <h2 className="text-xl font-bold mb-3">Latest News</h2>
            <ul className="space-y-2">
              <li>📈 Bitcoin hits new all-time high.</li>
              <li>📰 Ethereum upgrade coming soon.</li>
              <li>🔐 Binance enhances security features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
