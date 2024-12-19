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
        <div className="user-account-setting " >
            <h3 className='text text-lg text-primary mt-5'>Member Information</h3>
            <form action="" id='account-info' className='acct-form'>
                <div className='form-row'>
                        <div className='form-col'>
                            <div className='form-item'>
                                <div className='form-row form-item-row'>
                                    <div className='form-col form-item-label'>
                                        <label htmlFor="accont-info-firstName" title='firstName'>First Name</label>
                                    </div>
                                    <div className='form-col form-item-control'>
                                        <div className='form-item-control-input'>
                                            <div className="form-item-control-input-content">
                                                <input type="text" id='account-info-firstName' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='form-col'>
                            <div className='form-item'>
                                <div className='form-row form-item-row'>
                                    <div className='form-col form-item-label'>
                                        <label htmlFor="accont-info-lastName" title='lastName'>Last Name</label>
                                    </div>
                                    <div className='form-col form-item-control'>
                                        <div className='form-item-control-input'>
                                            <div className="form-item-control-input-content">
                                                <input type="text" id='account-info-lastName' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='form-col'>
                        <div className='form-item'>
                            <div className='form-row form-item-row'>
                                <div className='form-col form-item-label'>
                                    <label htmlFor="accont-info-firstName" title='firstName'>Email</label>
                                </div>
                                <div className='form-col form-item-control'>
                                    <div className='form-item-control-input'>
                                        <div className="form-item-control-input-content">
                                            <input type="email" id='account-info-email' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <div className="action-row">
                            <div className="action-col active ant-btn ant-btn mr-4"><button>Save</button></div>
                            <div className="action-col ant-btn ant-btn-default"><button>Logout</button></div>
                        </div>
                    </div>
            </form>
            
            <h3>Change Password</h3>
            

        </div>
    </div>
  )
}

export default Account