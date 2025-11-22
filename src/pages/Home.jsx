import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
        <h2>Page 1</h2>
        <h3>here is some test text</h3>
        <button onClick={() => navigate('/about')}>Go to Page 2</button>
      </section>
    </div>
  )
}
