import PropTypes from 'prop-types'

export const Stack = ({ children, pos }) => (
  <div
    className="stack"
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
    }}
  >
    {children}
  </div>
)

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}
