import React from 'react'
import './Overview.css'

const Overview = () => {
  return (


    <div className="career-dashboard">
    {/* Career Goal Section */}
    <div className='hold'>   
    <section className="career-goal">
      <h2>Upcoming Career Objective: <strong>Secure a New Job</strong></h2>
      <button>Edit Goals ✏️</button>
      <div className="goal-details">
        <p><strong>Desired Position:</strong> Not Specified</p>
        <p><strong>Target Deadline:</strong> Not Specified</p>
        <p><strong>Salary Expectation:</strong> $0.00 - $0.00</p>
      </div>
    </section>

    {/* Introduction Video Section */}
    <section className="intro-video">
      <h3>Discover the JOBJOTT Approach: Crafting Tailored Resumes</h3>
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/JOBJOTT" 
        title="JOBJOTT Introduction Video"
        allowFullScreen
      ></iframe>
      <button>Mark as Completed ✅</button>
    </section>
</div>
    {/* Task List Section */}
    <section className="task-list">
      <h3>Kickstart Your Journey</h3>
      <p><strong>Progress:</strong> 0% Complete | 0 of 3 Steps Done</p>
      
      <div className="task">
        <h4> 1️⃣ Build Your Resume</h4>
        <p>Sync your LinkedIn profile, upload an existing resume, or use AI tools to design tailored resumes.</p>
        <button>Start Building ➡️</button>
      </div>

      <div className="task">
        <h4>2️⃣ Install the Chrome Add-on</h4>
        <p>Get JOBJOTT’s Chrome extension to bookmark jobs, save contacts, and organize company details.</p>
        <button>Install Extension 🔗</button>
      </div>

      <div className="task">
        <h4>3️⃣ Add Jobs to Your Tracker</h4>
        <p>Easily save job listings through the Chrome extension or add them manually.</p>
        <button>Add Job ➕</button>
      </div>
    </section>
  </div>
)
  
}

export default Overview;




