export default function Tab({ id, title, date }) {
    return (
        <div>
          <a href= { '/content/' + id } className = 'link'>{ title }</a>
          <span className = 'text-gray-400 text-xs'>{ date }</span>
        </div>
    )
}