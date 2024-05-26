import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const StyledMarkdown = styled(ReactMarkdown)(({ theme }) => ({
  '& p': {
    ...theme.typography.body1,
    marginBottom: '1rem',
    fontSize: '1.125rem',
  },
  '& h1': {
    ...theme.typography.h1,
    marginBottom: '1rem',
  },
  '& h2': {
    ...theme.typography.h2,
    marginBottom: '1rem',
  },
  '& h3': {
    ...theme.typography.h3,
    marginBottom: '1rem',
  },
  '& h4': {
    ...theme.typography.h4,
    marginBottom: '1rem',
  },
  '& h5': {
    ...theme.typography.h5,
    marginBottom: '1rem',
  },
  '& h6': {
    ...theme.typography.h6,
    marginBottom: '1rem',
  },
  '& ul': {
    margin: '0 0 1rem 15px',
  },
  '& li': {
    ...theme.typography.body1,
  },
}))

const Markdown: React.FC<PropsWithChildren<Options>> = (props) => (
  <StyledMarkdown {...props} rehypePlugins={[rehypeRaw]} />
)

export default Markdown
