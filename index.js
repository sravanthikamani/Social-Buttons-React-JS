/*Here Button component is created by sending the props*/
const Button = props => {
  const {buttonType, className} = props //destructuring the props
  return <button className={`buttonType,${className}`}>{buttonType}</button>
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='buttons-class'>
      <Button className='like-button' buttonType='Like' /> //component is used with props
      <Button className='comment-button' buttonType='Comment' />
      <Button className='share-button' buttonType='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
