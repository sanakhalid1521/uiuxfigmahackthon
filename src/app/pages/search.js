import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div className="container mx-auto mt-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {query ? (
        <p className="text-lg">Results for: <span className="font-semibold">{query}</span></p>
      ) : (
        <p className="text-lg text-gray-500">No search term provided. Please try again.</p>
      )}

      {/* Placeholder for search results */}
      <div className="mt-6">
        {/* Replace with dynamic content */}
        <p className="text-gray-400">Search results will appear here...</p>
      </div>
    </div>
  );
};

export default SearchPage;
