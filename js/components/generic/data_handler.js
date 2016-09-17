// @flow
import React from 'react'
import ErrorPage from './error_page'
import LoadingPage from './loading_page'

export function BuildDataHandler(successRender) {
  const DataHandler = (props) => {
    const data = props.data

    if (data.loading) {
      return <LoadingPage />
    } else if (data.error) {
      return <ErrorPage error={data.error} />
    } else {
      return successRender(data)
    }
  }

  return DataHandler
}
