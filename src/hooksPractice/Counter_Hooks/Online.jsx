import useOnOffLine from './useOnOffLine'

const Online = () => {

    const isOnline  = useOnOffLine()
    
  return (
    <div>
      <h1>
        { isOnline ? "Online" : "Offline"}
      </h1>
    </div>
  )
}

export default Online
