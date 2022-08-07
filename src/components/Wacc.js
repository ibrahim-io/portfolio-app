import ReactEmbedGist from 'react-embed-gist'
const Wacc = () => {
  return (
    <div>
      <h1>WACC</h1>
      <p>In this project, I participated in a group project to build a compiler</p>
      <ReactEmbedGist 
        gist='ibrahim-io/3f4d5808e148aa1f519e04c2c200fc13'
        wrapperClass="gist__bash"
        loadingClass="loading__screen"
        titleClass="gist__title"
        errorClass="gist__error"
        contentClass="gist__content" />
    </div>
  )
}

export default Wacc