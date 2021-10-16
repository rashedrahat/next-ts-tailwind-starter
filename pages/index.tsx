import Layout from '../components/Layout'
import {useStore} from "../utils/store";

const IndexPage = () => {
    const {bears, increasePopulation, removeAllBears} = useStore()

    return (
        <Layout title="Home">
            <h1 className="text-center my-24 font-black tracking-tight text-6xl">Hello 👋</h1>
            <div className="text-center">
                <p>{bears} &#129528; around here ...</p>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={increasePopulation}>One up
                </button>
                &nbsp;
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={removeAllBears}>Remove all
                </button>
            </div>
        </Layout>
    )
}

export default IndexPage