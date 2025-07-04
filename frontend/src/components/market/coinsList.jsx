import React, { useState ,useEffect} from 'react';

export function CoinsList() {
  const [page, setPage] = useState(1);
useEffect(()=>{
const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=false`

}


,[page])

  const rowsPerPage = 1;

  // Hardcoded table data directly in the render logic
  const hardcodedData = [
    {
      name: 'BTC',
      fullName: 'Bitcoin',
      price: 109320,
      change: '+0.61%',
      volume: '$49.23B',
      marketCap: '$2.17T',
    },
    {
      name: 'ETH',
      fullName: 'Ethereum',
      price: 2586.5,
      change: '+0.83%',
      volume: '$19.72B',
      marketCap: '$312.71B',
    },
    // You can add more entries here
  ];

  const totalPages = Math.ceil(hardcodedData.length / rowsPerPage);
  const paginatedData = hardcodedData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="p-6 bg-[#181a20] text-white min-h-screen mt-20 flex flex-col items-center overflow-x-auto">
      <table className="w-full md:w-10/12 text-left border-collapse rounded overflow-hidden">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700 bg-[#1f222a]">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Change</th>
            <th className="py-3 px-4">24h Volume</th>
            <th className="py-3 px-4">Market Cap</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
              <td className="py-3 px-4 flex items-center space-x-2">
                <span className="font-bold text-orange-400">{item.name}</span>
                <span className="text-gray-400">{item.fullName}</span>
              </td>
              <td className="py-3 px-4">${item.price.toLocaleString()}</td>
              <td className={`py-3 px-4 ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {item.change}
              </td>
              <td className="py-3 px-4">{item.volume}</td>
              <td className="py-3 px-4">{item.marketCap}</td>
              <td className="py-3 px-4 flex gap-2">
                <button className="hover:text-blue-400 transition">🔍</button>
                <button className="hover:text-yellow-400 transition">⚙️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-sm text-gray-300">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
