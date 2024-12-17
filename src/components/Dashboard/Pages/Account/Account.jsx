import React from 'react'
import './Account.css'

const Account = () => {


  return (
    <div className="stack">
        <nav className="px-4 py-3 border-b border-neutral-200">
            <ul className=' flex flex-row gap-2'>
                <li className='acct-btn'>
                    <button aria-selected='true' role='tab'>
                        <span className='my-acct'>My Account</span>
                    </button>
                </li>
                <li className='job-sub-btn'>
                    <button aria-selected='true' role='tab'>
                        <span className='job-sub'>JobJott+ Subscription</span>
                    </button>
                </li>
            </ul>
        </nav>
        <div className="user-account-setting">
            <h3 className='text text-lg text-primary mt-5'>Member Information</h3>

        </div>
    </div>
  )
}

export default Account