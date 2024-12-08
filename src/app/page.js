import Filter from "../../components/Filter"
import Card from "../../components/Card"
export default function page() {
  return (
    <div className="container mx-auto">
      <Filter />
      <div className="w-2/12">
        <div className="relative w-full pb-full">
          <Card />
        </div>
      </div>


    </div>
  )
}
