import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Home Page */}
      <section 
        id="home" 
        className="text-center py-12 bg-gradient-to-br from-purple-100 to-white rounded-lg shadow"
      >
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          ระบบติดตามและประเมินผลกิจกรรมการออกกำลังกาย
        </h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          สำหรับบุคลากรมหาวิทยาลัยพะเยา
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          ระบบนี้ช่วยให้บุคลากรสามารถส่งลิงก์กิจกรรมจากกลุ่ม Facebook ได้สะดวก
          พร้อมทั้งวิเคราะห์คอมเมนต์จากผู้ประเมินด้วย AI เพื่อประเมินผลโดยอัตโนมัติ
          ลดภาระของเจ้าหน้าที่และรักษาความเป็นส่วนตัวของข้อมูลได้อย่างมีประสิทธิภาพ
        </p>
        <div className="mt-8 space-x-4">
          <Link 
            to="/login" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors"
          >
            เข้าสู่ระบบ
          </Link>
          <Link 
            to="/signup" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
          >
            สมัครใช้งาน
          </Link>
        </div>
      </section>
    </div>
  )
}