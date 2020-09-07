import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>hello, I'm Jomel Imperio! &#x1F44B;</h1>
      <h2>what I do:</h2>
      <ul>
        <li>
          write - <Link to="/blog">all blog posts</Link>
        </li>
        <li>
          make software - CTO at <a href="https://www.insynchq.com/">Insync</a>
        </li>
        <li>
          tweet - <a href="https://twitter.com/jimperio">@jimperio</a>
        </li>
        <li>
          draw -{" "}
          <a href="https://instagram.com/jomel.draws/">IG: jomel.draws</a>
        </li>
      </ul>
    </div>
  )
}
