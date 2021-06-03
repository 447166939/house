import React from 'react'
import WithSiderAndPageHeader from '@/components/WithSiderAndPageHeader'
export interface IWebDesignProps {

}
const WebDesignPage:React.FC<IWebDesignProps>=(props:IWebDesignProps)=>{
    return (
        <WithSiderAndPageHeader>
            <div>dd</div>
        </WithSiderAndPageHeader>
    )
}
export default WebDesignPage