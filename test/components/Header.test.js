import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Header from '../../src/components/Header'

const enzymeWrapper = shallow(<Header />)

test('Header Component', t =>{
  t.equal(
    enzymeWrapper.find('h1').text(),
    'Todo App'
  )

  t.end()
})
