// Write your code here
// Write your code here
// Write your code here
import './index.css'
import PasswordItem from '../PasswordItem'
import {useState} from 'react'
const PasswordManager = () => {
  const [websitename, setfun1] = useState('')
  const [usernamegiven, setfun2] = useState('')
  const [passwordsecret, setfun3] = useState('')
  const [searchtext, setfun5] = useState('')
  const [elemensts, setfun4] = useState([])
  const [isShow, setShowPasswords] = useState(false)
  const thesearchitem = event => {
    setfun5(event.target.value)
  }
  const websiteinput = event => {
    setfun1(event.target.value)
  }
  const usernameclicked = event => {
    setfun2(event.target.value)
  }
  const passwordclicked = event => {
    setfun3(event.target.value)
  }
  const deletetheitem = id => {
    const filteredList = elemensts.filter(item => item.id !== id)
    setfun4(filteredList)
  }
  const thesubmitisclicked = event => {
    event.preventDefault()
    const oneitem = {
      id: Date.now(),
      websitename,
      usernamegiven,
      passwordsecret,
      isShow: false,
    }
    setfun4(pre => [...pre, oneitem])
    setfun1('')
    setfun2('')
    setfun3('')
  }
  const filteredList = elemensts.filter(eachitem =>
    eachitem.websitename.toLowerCase().includes(searchtext.toLowerCase()),
  )

  return (
    <div className="con-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="img-1"
      />
      <div className="con-2">
        <form className="con-3" onSubmit={thesubmitisclicked}>
          <h1> Add New Password</h1>
          <div className="con-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="img-2"
            />
            <input
              type="text"
              value={websitename}
              onChange={websiteinput}
              placeholder="Enter Website"
            />
          </div>
          <div className="con-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="img-2"
            />
            <input
              type="text"
              value={usernamegiven}
              onChange={usernameclicked}
              placeholder="Enter username"
            />
          </div>
          <div className="con-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="img-2"
            />
            <input
              type="password"
              value={passwordsecret}
              onChange={passwordclicked}
              placeholder="Enter password"
            />
          </div>
          <div className="con-5">
            <button type="submit" className="btn-1">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="img-3"
        />
      </div>

      <div className="con-6">
        <div className="con-8">
          <div className="con-7">
            <h1 className="head"> Your Passwords</h1>
            <p className="para">{filteredList.length}</p>
          </div>
          <div className="con-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="img-2"
            />
            <input
              type="search"
              value={searchtext}
              placeholder="search"
              onChange={thesearchitem}
            />
          </div>
        </div>
        <hr />
        <div className="con-10">
          <div className="con-9">
            <input
              type="checkbox"
              id="showPasswords"
              className="in-1"
              onChange={() => setShowPasswords(prev => !prev)}
            />
            <label htmlFor="showPasswords" className="pass1">
              Show passwords
            </label>
          </div>
        </div>
      </div>
      <ul className={filteredList.length === 0 ? 'div1' : 'div2'}>
        {filteredList.length === 0 ? (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="image"
            />
            <p className="hi">No Passwords</p>
          </>
        ) : (
          filteredList.map(eachitem => (
            <PasswordItem
              key={eachitem.id}
              {...eachitem}
              deletetheitem={deletetheitem}
              isShow={isShow}
            />
          ))
        )}
      </ul>
    </div>
  )
}
export default PasswordManager
