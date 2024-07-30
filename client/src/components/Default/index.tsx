import HeaderComponent from '../Header'

const DefaultComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default DefaultComponent
