import React from 'react'
import './Blogs.css'
import search from '../../assests/search.svg'
const Blogs = () => {
  return (
    <div className='container'>
      <div className='blog'>
      <h1>Blogs</h1>
      <form>
      <input type="text" placeholder="Search..."/>
      <img src={ search } alt="search" width="18" className='search-icon'/>
     </form>
     </div>
     <br/>

      <div className='blgpage'>
     <div className="blgcontainer">
     <div className="card">
    <div className="card-header sss dd">
    <img src={require('../../assests/img1.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      Step By Step Guide On Writing Book Review In 2023
      </h4>
      <p>
      The purpose is to get the student to read a literature piece, evaluate it, and draw conclusions in writing.
      </p>
      <div className="user">
      <img src={require('../../assests/b-1.jpg')} />
        <div className="user-info">
          <h5>Eyup Ucmaz</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img2.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      Swami Vivekananda Books | A List of 28 Best Books
      </h4>
      <p>
      Swami Vivekananda was an Indian Hindu monk, public speaker, Vedanta philosopher and Yoga practitioner.
      </p>
      <div className="user">
      <img src={require('../../assests/b-5.jpg')} />
        <div className="user-info">
          <h5>SANKALPITA</h5>
          <small>Today</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img3.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      The Summer I Turned Pretty Book vs TV Show
      </h4>
      <p>
      Belly a.k.a Isabel’s life is all about her summer break. She just loves that time of the year, because, for her, it is the time for fun, family, and relaxation.
      </p>
      <div className="user">
      <img src={require('../../assests/b-6.jpg')} />
        <div className="user-info">
          <h5>TASNIMA</h5>
          <small>Just Now</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img4.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      Food-themed fiction novels for every hungry reader
      </h4>
      <p>
      Whenever we are asked about our favourite cuisine, we respond with a story in our heads relating to that food. Food has long served as a source of sustenance for humans and inspiration for some incredible works of art.
      </p>
      <div className="user">
      <img src={require('../../assests/b-2.jpg')} />
        <div className="user-info">
          <h5>Eurekha</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img5.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      The Immortal Secret Mantra – The Recipe | Vivek Shukla | Book Review
      </h4>
      <p>
      It is the time when memories, that will last her a lifetime, are created. So, for her, everything best happens during those blissful months from June to August.
      </p>
      <div className="user">
      <img src={require('../../assests/b-8.jpg')} />
        <div className="user-info">
          <h5>Mathew</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img6.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      Durga | Kevin Missal | Book Review
      </h4>
      <p>
      Food has long served as a source of sustenance for humans and inspiration for some incredible works of art.
      </p>
      <div className="user">
      <img src={require('../../assests/b-7.jpg')} />
        <div className="user-info">
          <h5>Ramaliya</h5>
          <small>Today</small>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img7.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      MultiRealm: When Brahma Prays | Arjuna K | Book Review
      </h4>
      <p>
      When Brahma Prays, the Multi-realm is portrayed as a conglomeration of several realms or worlds which are populated by many types of beings.
      </p>
      <div className="user">
      <img src={require('../../assests/b-4.jpg')} />
        <div className="user-info">
          <h5>Gmaliya</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
    <img src={require('../../assests/img8.jpg')} />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Popular</span>
      <h4>
      Thank You for Listening | Julia Whelan | Book Review
      </h4>
      <p>
      I have been a fan of audiobooks for a long time, but I have never ever come across a book whose main characters are audiobook narrators.
      </p>
      <div className="user">
      <img src={require('../../assests/b-3.jpg')} />
        <div className="user-info">
          <h5>Richard</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


    
    </div>
  )
}

export default Blogs
