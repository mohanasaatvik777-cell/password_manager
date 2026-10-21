// Write your code here
// Write your code here
// Write your code here
import './index.css'
const PasswordItem = props => {
  const {
    id,
    websitename,
    usernamegiven,
    deletetheitem,
    passwordsecret,
    isShow,
  } = props
  const onDelete = () => {
    deletetheitem(id)
  }

  return (
    <li className="con-11">
      <div className="con-12">
        <p className="p-1">{websitename ? websitename[0] : ''}</p>
        <div className="c-1">
          <p>{websitename}</p>
          <p>{usernamegiven}</p>
          {isShow ? (
            <p>{passwordsecret}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="img"
            />
          )}
        </div>
      </div>
      <button
        className="i-1"
        onClick={onDelete}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="img-12"
        />
      </button>
    </li>
  )
}
export default PasswordItem
