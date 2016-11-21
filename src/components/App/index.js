import React from 'react'
import AppDev from './App.dev'
import AppProd from './App.prod'

export default function App() {
  if (__PROD__) return <AppProd />
  if (__DEV__) return <AppDev />
  return (
    <div>
      <h1>Error</h1>
      <h2>Please set the environment variable to 'development' or 'production'</h2>
    </div>
  )
}
