export const EchoView = () => {
  return (
    <html lang="en">
      <head>
        <title>Echo</title>
      </head>
      <body>
        <form method={'post'}>
          <input name={'message'} placeholder={'메세지를 입력하세요'} />
          <button type={'submit'}>제출</button>
        </form>
      </body>
    </html>
  )
}
