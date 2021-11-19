import React from 'react'
import profilepic from '../static/images/shreyash_rajam.jpg'
import '../index.css'


export default function HomePage() {
    return (
        <div className="sidespace">
            <div className="row">
                <div className="col s12 m5 l5">

                    <div class="" >
                        <div class=""  style={{marginTop:"2%"}}>
                            <img className="card" src={profilepic} height="650" width="auto"/>
                        </div>
                    </div>

                </div>
                <div className="col s12 m7 l7" style={{}}>
                    <div className="" style={{marginLeft:"6vh", marginTop:"28%"}}>
                        <div className="row" style={{margin:"0"}}>
                            <div className="col s1 l1 m1 "><h1 className="namestyle">—</h1></div>
                            <div className="col s11 l11 m11" style={{}}>
                                <h1 className="namestyle">I'M SHREYASH RAJAM.</h1></div></div>
                        <div className="row">
                            <div className="col s1 l1 m1 " ><h1 className="namestyle"></h1></div>
                            <div className="col s11 l11 m11" >
                            <h1 className="white-text " className="namestyle">WEB DEVLOPER</h1></div></div>
                        
                    </div>

                    <p className="white-text maininfo">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                </div>
            </div>
        </div>
    )
}
