import React from 'react'

function NewsLetter() {
    return (
        <div className='container mb-5 pb-3'>
            <div className="mb-3">
                <h1>Get Exclusive offers</h1>
                <p>Subscribe to our News Letter</p>
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
    )
}

export default NewsLetter