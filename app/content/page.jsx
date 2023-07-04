import Tab from '../../components/tab'
import data from '../../data/samples.json'

export default function Content() {
    return (
      <section className = 'flex flex-col gap-6'>
        {
          data.map((item, index) => <Tab key = { index } { ...item } />)
        }
      </section>
    )
}