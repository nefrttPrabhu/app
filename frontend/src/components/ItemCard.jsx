export default function ItemCard({ item }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.type}</p>
      <p className="text-gray-700 mt-2 line-clamp-3">{item.content.text}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm mt-3 inline-block"
      >
        View Source →
      </a>
    </div>
  );
}
