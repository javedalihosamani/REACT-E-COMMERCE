import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
    <>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
          <div class="card text-start">
            <div class="card-body">
              <Skeleton width='100%' height={10} count={8}/>
            </div>
            <div className="card-footer">
              <Skeleton width='100%' height={10} count={2}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Loading