import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container " >
          <div className="well well-sm">
            <h3><strong>Наше местоположение</strong></h3>
          </div>

          <div className="row">
            <div className=" map col-md-7">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12hOCR1kDvwsC-g5rK4vbYMhnz8Wx21Q&ehbc=2E312F"
                style={{
                  border: 0,
                  width: '100%',
                  height: '315px',
                  frameborder: "0"

                }} allowFullScreen
              />  
            </div>
            <div className="col-md-5">
              <h4><strong>Обратная связь</strong></h4>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group mt-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group mt-3">
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
                <textarea className="form-control mt-3" cols="30" rows="3" placeholder="Massege"/>
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-planыe-o" aria-hidden="true"/>
                  <i className="fab fa-telegram-plane"/>&nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}









export default Contacts



 