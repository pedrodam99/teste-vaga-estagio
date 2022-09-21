export default function ClearButton({ text }) {
  return (
    <div>
      <button className="h-9 w-40  bg-gray-500 px-3 hover:bg-gray-700  text-white">
        {text}
      </button>
    </div>
  );
}
