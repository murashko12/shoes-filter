import React from 'react'
import './Price.css'
import Input from '../../components/Input'

const Price = () => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      {/* <label className="sidebar-lable-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-lable-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$0-$50
      </label>
      <label className="sidebar-lable-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$100-$150
      </label>
      <label className="sidebar-lable-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$150-$200
      </label>
      <label className="sidebar-lable-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$200-$250
      </label> */}
    </div>
  )
}

export default Price
