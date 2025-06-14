import React, { useState } from 'react'
import logoUP from '../../assets/logo.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="w-full max-w-[909px] mx-auto relative bg-white rounded-[24px] shadow-2xl px-8 md:px-16 py-10 space-y-8 font-[Inter]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <img src={logoUP} alt="โลโก้มหาวิทยาลัยพะเยา" className="w-[39.75px] h-[53px]" />
            <h2 className="text-[24px] font-semibold text-black">Contact</h2>
          </div>
          <p className="text-[16px] text-center text-black max-w-[696px] leading-[19px]">
            If you have any questions, suggestions or encounter any problems with the system,<br />
            please contact the development team using the information below or send a message via this form.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="text-[16px] leading-[19px] text-black space-y-3">
            <p><strong>Developer Name:</strong> Ms. Napatsorn Sawangsri</p>
            <p><strong>Student ID:</strong> 66026066</p>
            <p><strong>Email:</strong> 66026066@up.ac.th</p>
            <p><strong>University:</strong> University of Phayao</p>
            <p><strong>Program:</strong> Bachelor of Engineering Program in Software Engineering</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-6 bg-white border border-gray-200 rounded-[8px]">
            <div>
              <label className="block text-[#1E1E1E] mb-1 text-[16px]">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#874CA0] p-3 rounded-[8px] text-[16px] placeholder:text-[#B3B3B3]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-[#1E1E1E] mb-1 text-[16px]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#874CA0] p-3 rounded-[8px] text-[16px] placeholder:text-[#B3B3B3]"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-[#1E1E1E] mb-1 text-[16px]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#874CA0] p-3 rounded-[8px] text-[16px] h-28 placeholder:text-[#B3B3B3]"
                placeholder="Write a message to contact..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8D38C9] text-white font-medium py-3 rounded-[8px] hover:bg-purple-700 transition"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}