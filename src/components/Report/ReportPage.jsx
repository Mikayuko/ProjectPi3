import React, { useState } from 'react'

export default function ReportPage() {
  const [selectedWeek, setSelectedWeek] = useState(null)

  const reports = [
    {
      week: 1,
      posts: 40,
      passed: 38,
      failed: 2,
      details: [
        { date: '2025-06-09', status: 'passed', activity: 'วิ่ง 5 รอบ' },
        { date: '2025-06-10', status: 'failed', activity: 'ไม่ได้ออกกำลังกาย' }
      ]
    },
    {
      week: 2,
      posts: 45,
      passed: 45,
      failed: 0,
      details: [
        { date: '2025-06-16', status: 'passed', activity: 'วิ่ง 6 รอบ' },
        { date: '2025-06-17', status: 'passed', activity: 'ว่ายน้ำ 30 นาที' }
      ]
    }
  ]

  const totalActivities = reports.reduce((sum, week) => sum + week.posts, 0)
  const totalPassed = reports.reduce((sum, week) => sum + week.passed, 0)
  const passRate = ((totalPassed / totalActivities) * 100).toFixed(1)

  const handleExportPDF = () => {
    // TODO: Implement PDF export
    console.log('Exporting PDF...')
  }

  const handleExportExcel = () => {
    // TODO: Implement Excel export
    console.log('Exporting Excel...')
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">📊 Exercise Report</h1>
          <p className="mt-2 text-gray-600">View and analyze exercise activities</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Activities</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{totalActivities}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Pass Rate</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{passRate}%</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">Active Weeks</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{reports.length}</p>
          </div>
        </div>

        {/* Weekly Reports */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Summary</h2>
            
            <div className="space-y-6">
              {reports.map((week) => (
                <div 
                  key={week.week} 
                  className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}
                >
                  <h3 className="font-medium text-gray-900 mb-3 cursor-pointer hover:text-purple-600">
                    Week {week.week}: {week.posts} posts
                  </h3>
                  {selectedWeek === week.week && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex gap-4 mb-3">
                        <span className="text-green-600">✓ Passed: {week.passed}</span>
                        <span className="text-red-600">✗ Failed: {week.failed}</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        {week.details.map((detail, index) => (
                          <p key={index}>
                            {detail.date}: {detail.activity}
                            <span className={`ml-2 ${
                              detail.status === 'passed' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              ({detail.status})
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleExportPDF}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            Export PDF
          </button>
          <button 
            onClick={handleExportExcel}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            Export Excel
          </button>
        </div>
      </div>
    </div>
  )
}