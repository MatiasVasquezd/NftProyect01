export function Alert({message}) {
    return <div className="bg-red-100 border border-red-400
    text-red-700 px-3 py-1 rounded relative mb-2 text-center">
        <span className="sm:inline-block"> {message}</span>
    </div>
    
  }
  
  