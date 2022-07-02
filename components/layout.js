import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
        <div className="min-h-screen flex flex-col items-center font-roboto">
          <div className="w-[85%]">
            <Alert preview={preview} />
            <main>{children}</main>
          </div>
        </div>
      <Footer />
    </>
  )
}
