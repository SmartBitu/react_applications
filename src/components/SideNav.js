import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


export default function SideNav() {
    return (
        <div className="">
            <div className="col right-align">
                <div className="row center-align ">
                <Link to="/" className="btn-floating btn-large waves-effect waves-light #fdd835 yellow darken-1 navhover" ><i className="material-icons">home</i></Link></div>
                <div className="row center-align">
                    <Link to="/about" className="btn-floating btn-large waves-effect waves-light #455a64 blue-grey darken-2" ><i className="material-icons">person</i></Link></div>
                <div className="row center-align">
                    <a className="btn-floating btn-large waves-effect waves-light#455a64 blue-grey darken-2"><i className="material-icons">cases</i></a></div>
                <div className="row center-align">
                    <a className="btn-floating btn-large waves-effect waves-light #455a64 blue-grey darken-2"><i className="material-icons">drafts</i></a></div>
            </div>
        </div>
    )
}