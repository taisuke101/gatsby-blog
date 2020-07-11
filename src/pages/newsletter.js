import React from 'react'

import Layout from '../components/Layout'

const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>Get all the latest stories to your inbox</h2>
        <h4>I write to my friends every few weeks</h4>
        <form 
          className="contact-form"
          name="testing-contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <input 
            type="hidden" 
            name="bot-field" 
          />
          <input 
            type="hidden" 
            name="form-name"
            value="testing-contact" 
          />
          <input 
            type="text" 
            name="name"
            placeholder="お名前"
            className="form-control" 
          />
          <input 
            type="text" 
            name="email"
            placeholder="Eメール"
            className="form-control" 
          />
          <button 
            type="submit"
            className="btn form-control submit-btn"
          >
            申し込む
          </button>
        </form>
      </div>
    </section>
  </Layout>
}

export default NewsLetter
