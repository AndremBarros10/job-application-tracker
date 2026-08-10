export default function App() {
  return <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
    <Header />
    <Kanban />
  </div>
}


function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="text-xl font-bold">Job Application Tracker</div>
      <div>
        <button className="bg-[#00A86B] hover:bg-[#00C27F] text-white font-bold py-2 px-4 border-b-4 border-[#00704A] hover:border-[#00915F] rounded">
 + Add New Application
        </button>
      </div>
    </header>
  )
}


function Kanban() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Applied</h2>
        {/* Render applied applications here */}
      </div>
      <div className="flex-1 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Interviewing</h2>
        {/* Render interviewing applications here */}
      </div>
      <div className="flex-1 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Offered</h2>
        {/* Render offered applications here */}
      </div>
      <div className="flex-1 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Rejected</h2>
        {/* Render rejected applications here */}
      </div>
    </div>
  )
}