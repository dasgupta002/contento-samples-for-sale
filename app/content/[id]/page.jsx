import Blob from '../../../components/blob'
import data from '../../../data/samples.json'

export default function Sample({ params }) {
    const sample = data[params.id - 1]

    return <Blob { ...sample } />
}