import { FC, PropsWithChildren } from "react";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'gray',
      padding: '10px',
      border:'1px solid',
      borderColor: 'white',
      borderRadius: '5px'
    }}>
      <h3>DarkLayout</h3>
      <div>
        { children }
      </div>
      
    </div>
  )
}
