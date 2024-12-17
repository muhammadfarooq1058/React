
import Card from "./Components/Card";
function App() {
  let Data=[
    {
      img:"https://images.unsplash.com/photo-1730114660685-fc179a2817fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName:"Aliza Hussain",
      Dis:"Developer",
      Posts:"12",
      Followers:"246",
      Following:"12",
    },
    {
      img:"https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName:"Ali Ahmad",
      Dis:"Designer",
      Posts:"113",
      Followers:"21k",
      Following:"200",
    },
  ]

  return (
    <>
    <div className="w-screen h-screen flex items-center justify-center gap-4">
    {
      Data.map((user)=>(
        <Card img={user.img} userName={user.userName} Dis={user.Dis} Posts={user.Posts} Followers={user.Followers} Following={user.Following}/>
      ))
    }
    </div>
    </>
  )
}

export default App
