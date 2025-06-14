import React, { useState } from 'react'

export default function Post() {
  const [url, setUrl] = useState('')
  const [showDetail, setShowDetail] = useState(false)
  const [postData, setPostData] = useState({
    originalPost: 'ประเมินการออกกำลังกายประจำสัปดาห์ที่ 1 วันที่ 9-15 มิถุนายน 2568',
    comments: [
      'วิ่ง 5 รอบสนาม วันที่ 10',
      'วิ่ง 6'
    ]
  })

  const handleFetchPost = async () => {
    try {
      if (url.trim()) {
        // TODO: Replace with actual API call
        setShowDetail(true)
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      // TODO: Add error handling UI
    }
  }

  const handleEvaluateComments = async () => {
    try {
      // TODO: Implement comment evaluation logic
      console.log('Evaluating comments...')
    } catch (error) {
      console.error('Error evaluating comments:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Submit Facebook Post</h1>

        {/* Input Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <label htmlFor="fb-url" className="block text-gray-800 font-medium text-lg mb-3">
            Facebook Post URL
          </label>
          <input
            id="fb-url"
            type="text"
            placeholder="https://facebook.com/..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700
                     placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleFetchPost}
              className="flex-1 sm:flex-none px-6 py-3 bg-purple-600 hover:bg-purple-700
                       text-white rounded-lg font-medium transition-colors duration-200"
            >
              Pull post text
            </button>
            <button
              disabled={!url}
              onClick={handleEvaluateComments}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium transition-colors duration-200
                       ${!url
                         ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                         : 'bg-yellow-600 hover:bg-yellow-700 text-white'}`}
            >
              Pull comment evaluation
            </button>
          </div>
        </div>

        {/* Post Detail Section */}
        {showDetail && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Post Details</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Original Post</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{postData.originalPost}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Comments</h3>
                <div className="space-y-3">
                  {postData.comments.map((comment, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}