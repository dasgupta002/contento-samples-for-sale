export default function Blob({ title, body, date }) {
    return (
        <article>
          <div className = 'border border-r-4 border-violet-400 rounded-lg mb-12 p-2'>
            <h1 className = 'font-bold text-xl mb-6'>{ title }</h1>
            <span className = 'block text-gray-400 text-xs'>{ date }</span>
          </div>
          <p className = 'text-justify text-sm'>{ body }</p>
        </article>
    )
}