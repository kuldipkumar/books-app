import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Footer = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
       <div className='footer'>
           {location.pathname === '/' && (
            <Button
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd}
            />
      )}
       </div>
    )
}

Footer.defaultProps = { 
    title: 'Hello',
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Footer