import { CheckCircle } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        {/* Progress dots */}
        <div className="flex justify-center mb-16">
          <div className="w-3 h-3 rounded-full bg-gray-300 mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400 mx-2"></div>
        </div>
        
        {/* Registration complete text */}
        <h1 className="text-4xl font-bold text-center text-orange-400 mb-16">登録完了</h1>
        
        {/* Smartphone illustration */}
        <div className="flex justify-center">
          <div className="relative w-48 h-80 border-4 border-gray-800 rounded-3xl p-2">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
            <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}