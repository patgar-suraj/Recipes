import axios from '../utils/axios'

const Home = () => {

  const getproduct = async () => {
    try {
      const instance = await axios.get("/products")
      console.log(instance.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={getproduct}>get product</button>
    </div>
  )
}

export default Home