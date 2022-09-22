export default function SubmitButton({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="h-9 w-40 bg-indigo-500   hover:bg-indigo-700   text-white"
      >
        {text}
      </button>
    </div>
  );
}
