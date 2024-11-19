// import "./App.css"
import { ICard } from "./types.ts"
import { Card } from "./components/card/index.tsx"

export default function App() {

  const cardList:ICard[] = [
    {icon:<img />, title: "Job no extra1", description:"Our description1"},
    {icon:<img />, title: "Job no extra2", description:"Our description2"},
    {icon:<img />, title: "Job no extra3", description:"Our description3"}
  ]

  return (
    <>
      <div>
        <h1> Our advantages </h1>
        <div className="card">
          {cardList.map((card:ICard) => <Card {...card} key={card.title}/>)}
        </div>
      </div>
    </>
  )
}

