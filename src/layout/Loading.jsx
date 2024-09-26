import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
    <>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
            <Skeleton width='100%' height={200} count={10}/>
        </div>
    </>
  )
}

export default Loading