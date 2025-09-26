export default function SearchBar({ keyword, setKeyword }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Cari berdasarkan judul ...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}
