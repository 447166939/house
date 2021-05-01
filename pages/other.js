import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import Page from '../components/page'

const Other = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  }, [dispatch])

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

})

export default Other
