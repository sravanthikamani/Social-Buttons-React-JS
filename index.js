const Button = props => {
  const {buttonType, className} = props
  return <button className={`buttonType,${className}`}>{buttonType}</button>
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='buttons-class'>
      <Button className='like-button' buttonType='Like' />
      <Button className='comment-button' buttonType='Comment' />
      <Button className='share-button' buttonType='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
